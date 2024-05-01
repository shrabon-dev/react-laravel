import React, { useEffect, useRef, useState } from 'react'
import Breadcrum from '../component/breadcrumb'
import Api from '../api';
import Resumable from 'resumablejs';
import { useStateContext } from '../context/ContextProvider';

export default function Upload() {
    let [steps,setSteps] = useState({
        stepOne:true,
        stepTwo:false,
        stepThree:false,
        stepFour:false,
        stepFive:false,
    })
    let {notify,setNotify} = useStateContext();
    let [count,setCount] = useState(0)
    let [videoName,setVideoName] = useState();
    const browseFileRef = useRef(null);
    let [progress,setProgress] = useState();
    let {token} = useStateContext();
    let [errors,setErrors] = useState({
        'title':'',
        'movie_name':'',
        'category':'',
        'release_date':'',
        'studio':'',
        'available_language':'',
        'rating':'',
        'description':'',
        'keywords':'',
        'thumbnail':'',
        'video':'',
        'cast':'',
        'seo_title':'',
        'seo_description':'',
        'd_name':'',
        'd_photo':'',
        'm_name':'',
        'm_photo':'',
        'status':'',
        'premium':'',
    });
    let [formData,setFormData] = useState({
        'title':'',
        'movie_name':'',
        'category':'',
        'release_date':'',
        'studio':'',
        'available_language':'',
        'rating':'',
        'description':'',
        'keywords':'',
        'thumbnail':'',
        'video':'',
        'cast':'',
        'seo_title':'',
        'seo_description':'',
        'd_name':'',
        'd_photo':'',
        'm_name':'',
        'm_photo':'',
        'status':'',
        'premium':'',
    })
    // Video Name of after uploaded
    const getName = (name) => {
        formData.video = name
        setFormData((prevFormData) => ({ ...prevFormData, video: name }));
    };
    let progressBar = useRef(null)
    // Video Upload by chunking
    useEffect(()=>{
            if(steps.stepTwo){
            const resumable = new Resumable({
                target: 'http://localhost:8000/api/upload', // Adjust your Laravel API endpoint
                chunkSize: 1 * 1024 * 1024,
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                testChunks:false,
                throttleProgressCallbacks:1,
              });

              resumable.assignBrowse(browseFileRef.current);

              resumable.on('fileAdded', (file) => {

                // Update the name in the FormData
                getName(file.file.name);

                // Start the upload with the custom-named file
                resumable.upload();
              });

              resumable.on('fileProgress',(file)=>{
                if(file.progress() != undefined){
                    setProgress(Math.floor(file.progress() * 100))
                }
              })
              resumable.on('fileSuccess', (file, response) => {

              });

              resumable.on('fileError',(file,responese)=>{
                // console.log(file)
                console.log(responese)
              })


            }
        },[steps.stepTwo])

    // OnChange handle
    let handleChange = (e) =>{
        let {name,value,files } = e.target;
        // let file = e.target.files[0];
        setFormData((prevFormData)=>({...prevFormData,[name]:value}))

        if(name == 'thumbnail'){
            setFormData((prevFormData)=>({...prevFormData,[name]:files[0]}))
        }
        if(name == 'd_photo'){
            setFormData((prevFormData)=>({...prevFormData,[name]:files[0]}))
        }
        if(name == 'm_photo'){
            setFormData((prevFormData)=>({...prevFormData,[name]:files[0]}))
        }
        if(name == 'cast'){
            let fileObjects  = []
            for(let i = 0; i < files.length;i++){
                fileObjects.push(files[i])
            }
            console.log(fileObjects )
            setFormData((prevFormData)=>({...prevFormData,[name]:fileObjects}))
        }

    }

    // Form Submit
    let handleUploadVideo = () =>{
        // e.preventDefault();
        // console.log(Math.floor(Date.now()/1000))
        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        data.append('thumbnail', formData.thumbnail);
        data.append('video', formData.video);
        data.append('d_photo', formData.d_photo);
        data.append('m_photo', formData.m_photo);

        // Assuming formData.cast is an array
        if( formData.cast){
        formData.cast.forEach((castValue, index) => {
            data.append(`cast[${index}]`, castValue);
        });
        }

        // setVFile(data.get('video'))
        Api.post('video',data,{
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
        })
        .then((response)=>{
            console.log(response)
            setFormData({
                'title':'',
                'movie_name':'',
                'category':'',
                'release_date':'',
                'studio':'',
                'available_language':'',
                'rating':'',
                'description':'',
                'keywords':'',
                'thumbnail':'',
                'video':'',
                'cast':'',
                'seo_title':'',
                'seo_description':'',
                'd_name':'',
                'd_photo':'',
                'm_name':'',
                'm_photo':'',
                'status':'',
                'premium':'',
            })
            setSteps((prev)=>({...prev,stepOne:true}))
            setNotify(response.data.message)
            setTimeout(()=>{
                setNotify('')
            },4000)
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    // Steps One validation for next step move
    let stepOneValidate = () => {
        const {
            title,
            movie_name,
            category,
            release_date,
            studio,
            available_language,
            rating,
            description,
            keywords} = formData


            const validateFields = [
                { name: 'title', label: 'Title' },
                { name: 'movie_name', label: 'Movie Name' },
                { name: 'category', label: 'Category' },
                { name: 'release_date', label: 'Release Date' },
                { name: 'studio', label: 'studio' },
                { name: 'available_language', label: 'Available Language' },
                { name: 'rating', label: 'Rating' },
                { name: 'description', label: 'Description' },
                { name: 'keywords', label: 'Keywords' },
                // Add more fields as needed
              ];

              let isValid = true;

              validateFields.forEach(({ name, label }) => {
                if (!formData[name]) {
                    setErrors((prevErrors) => {
                        return { ...prevErrors, [name]: `${label} is required` };
                      });

                  isValid = false;
                } else {
                    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
                }
              });

              return isValid;
    }

    // Steps Two validation for next step move
    let stepTwoValidate = () => {
        const {video} = formData

        return video;
    }
    // Steps Three validation for next step move
    let stepThreeValidate = () => {

        const validateFields = [
            { name: 'thumbnail', label: 'Title' },
            { name: 'seo_title', label: 'Seo Title' },
            { name: 'seo_description', label: 'Seo Description' },

            // Add more fields as needed
          ];

          let isValid = true;

          validateFields.forEach(({ name, label }) => {
            if (!formData[name]) {
                setErrors((prevErrors) => {
                    return { ...prevErrors, [name]: `${label} is required` };
                  });

              isValid = false;
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            }
          });

          return isValid;
    }
    // Steps Four validation for next step move
    let stepFourValidate = () => {
        // const {d_name,d_photo,m_name,m_photo} = formData

        // return d_name && d_photo && m_name && m_photo;
        return true;
    }
    // Steps Five validation for next step move
    let stepFiveValidate = () => {
        const {status,premium} = formData
        const validateFields = [
            { name: 'status', label: 'Status' },
            { name: 'premium', label: 'Premium' },

            // Add more fields as needed
          ];

          let isValid = true;

          validateFields.forEach(({ name, label }) => {
            if (!formData[name]) {
                setErrors((prevErrors) => {
                    return { ...prevErrors, [name]: `${label} is required` };
                  });

              isValid = false;
            } else {
                setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
            }
          });

          return isValid;
    }

    // Prev Button for moveing previous steps
    let handlePrevBtn = (value) =>{
        if(value >= 0 ){
        setCount(value)

        const keys = Object.keys(steps);
        const updatedStep = keys[value];

        keys.map((ele)=>{
            if( ele !== updatedStep){
                setSteps((prev)=>({...prev,[ele]:false}))
            }else{
                setSteps((prev)=>({...prev,[ele]:!prev[ele]}))
            }
        })
        }
    }
    // Next Button for moveing next steps
    let handleNextBtn = (value) =>{

        if(value <= 5){

            if(value == 1){
                if(value === 1 && !stepOneValidate()){
                    return;
                }
            }
            if(value == 2){
                if(value === 2 && !stepTwoValidate()){
                    return;
                }
            }
            if(value == 3){
                if(value === 3 && !stepThreeValidate()){
                    return;
                }
            }
            if(value == 4){
                if(value === 4 && !stepFourValidate()){
                    return;
                }
            }
            if(value == 5){
                if(value === 5 && !stepFiveValidate()){
                console.log('before validation 5 steps')

                    return;
                }
                console.log('after validation 5 steps')
            }

        setCount(value)
        const keys = Object.keys(steps);
        const updatedStep = keys[value];

        keys.map((ele)=>{
            if( ele !== updatedStep){
                setSteps((prev)=>({...prev,[ele]:false}))
            }else{
                setSteps((prev)=>({...prev,[ele]:!prev[ele]}))
            }

        })
        }
        if(value >= 5){
            handleUploadVideo()
        }
    }

  return (
    <>
     {/* Upload Form Start */}
      <div className='relative'>
        {/* Message of Data Uploaded */}
        {notify &&
            <div className="message font-manrope text-lg font-normal text-white bg-blue-600 p-5 rounded-lg w-max absolute top-0 right-10 animate-pulse duration-300 ease-linear">
                {notify}
            </div>
        }

      <Breadcrum/>
        <form className='max-w-4xl p-10 border bg-main rounded-lg shadow-xl m-auto' encType="multipart/form-data">
            {/* Tracking Form Data Uploading Start */}
            <div className={`track relative after:absolute after:bg-white after:content-[''] after:w-full after:h-4 after:top-1/2 z-0 after:-translate-y-1/2 after:shadow-inner after:shadow-dark after:left-0 before:bg-main before:z-10 before:absolute before:content-[''] before:duration-700 before:ease-linear ${steps.stepFive ? `before:w-[100%]`:`${steps.stepFour ? `before:w-[75%]`:`${steps.stepThree ? `before:w-[50%]`:`${steps.stepTwo ? `before:w-[25%]`:`${steps.stepOne ? `25%`:'0%'}`}`}`}`} before:rounded-full before:h-2 before:top-[52%] before:-translate-y-1/2 before:left-0 mx-10  flex justify-between items-center`}>
                <span className='bg-main w-10 h-10 shadow-inner shadow-dark block border-none rounded-full font-manrope relative -left-1 z-10 text-lg font-bold text-white text-center leading-10'>1</span>
                <span className={` duration-700 ease-linear ${steps.stepFive ? `bg-main text-white`:`${steps.stepFour ? `bg-main text-white`:`${steps.stepThree ? `bg-main text-white`:`${steps.stepTwo ? `bg-main text-white`:`bg-white text-main`}`}`}`}  stepPoint`}>2</span>
                <span className={` duration-700 ease-linear ${steps.stepFive ? `bg-main text-white`:`${steps.stepFour ? `bg-main text-white`:`${steps.stepThree ? `bg-main text-white`:`bg-white text-main`}`}`}  stepPoint`}>3</span>
                <span className={` duration-700 ease-linear ${steps.stepFive ? `bg-main text-white`:`${steps.stepFour ? `bg-main text-white`:`bg-white text-main`}`}  stepPoint `}>4</span>
                <span className={` duration-700 ease-linear ${steps.stepFive ? `bg-main text-white`:'bg-white text-main'}  stepPoint -right-3`}>5</span>
            </div>
            {/* Tracking Form Data Uploading End */}
            <h4 className="title text-center pt-10 text-2xl text-dark">
                Video Upload Form
            </h4>
            {steps.stepOne &&
                <>
                <div className="isShowInput">
                    <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Title :</label>
                        <input type='text' name='title' onChange={handleChange} value={formData.title}  className={`inpStyle ${errors.title && `border-red-700`}`}/>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins'>Movie Name* :</label>
                            <input type='text' name='movie_name' onChange={handleChange} value={formData.movie_name} className={`inpStyle ${errors.movie_name && `border-red-700`}`}/>
                        </div>

                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins'>Category :</label>
                            <select name="category" onChange={handleChange} id="" className={`inpStyle`}>
                                <option value="islamic">Islamic</option>
                                <option value="drama">Drama</option>
                                <option value="horror">Horror</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins'>Studio :</label>
                            <input type='text' name='studio' value={formData.studio} onChange={handleChange} className={`inpStyle ${errors.studio && `border-red-700`}`}/>
                        </div>
                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins '>Release Date* :</label>
                            <input type='date' name='release_date' value={formData.release_date} onChange={handleChange} className={`inpStyle ${errors.studio && `border-red-700`}`}/>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins'>Available Languages* :</label>
                            <input type='text' name='available_language' value={formData.available_language} onChange={handleChange}  className={`inpStyle ${errors.available_language && `border-red-700`}`} multiple/>
                        </div>
                        <div className='w-[48%] pb-4'>
                            <label htmlFor="" className='text-white text-lg font-light font-poppins'>Rating* :</label>
                            <input type='text' name='rating' onChange={handleChange} value={formData.rating} className={`inpStyle`}/>
                        </div>
                    </div>

                    <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Description* :</label>
                        <textarea name="description" onChange={handleChange} id="" cols="30" rows="6" className={`inpStyle ${errors.description && `border-red-700`}`}>{formData.description}</textarea>
                    </div>
                    <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg '>Keywords* :</label>
                        <input type='text' name='keywords' onChange={handleChange} value={formData.keywords} className={`inpStyle ${errors.keywords && `border-red-700`}`}/>
                    </div>
                </div>
                </>
            }
            {steps.stepTwo && <>
                <div className="isShowInput">
                    <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Video File :</label>
                        { formData.video ?
                        <p className='text-white bg-[#58acb6] p-4 rounded-lg text-lg font-light font-poppins'>{formData.video}</p>
                        :
                        <input ref={browseFileRef} type='file' name='video' accept='video/*' onChange={handleChange}  className={`inpStyle border-4 border-red-700  ${errors.video && `border-red-700`}`}/>
                        }
                    </div>
                    {progress != undefined &&
                    <div className="animate">
                        <div className='w-full block bg-[#0b2d31] shadow-inner shadow-black/50 h-4 rounded-full relative' >
                            <span ref={progressBar} style={{ width: `${progress - 1}%` }} className={` duration-300 ease-linear box-border block bg-[#1f9292] shadow-inner shadow-black/50 h-3 rounded-full absolute top-1/2 z-10 left-1 -translate-y-1/2`} ></span>
                        </div>
                        <p className='text-center block font-interTight font-normal text-2xl text-white'>{progress}%</p>
                     </div>
                     }
                </div>
            </>}
            {steps.stepThree &&
            <>
            <div className="isShowInput">
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Thumbnail :</label>
                    <input type='file' name='thumbnail' accept='.png,.jpg,.jpeg,.webp' onChange={handleChange} className={`inpStyle border-4 border-red-700  ${errors.thumbnail && `border-red-700`}`}/>
                </div>
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Cast :</label>
                    <input type='file' name='cast' onChange={handleChange} className={`inpStyle  ${errors.cast && `border-red-700`}`} multiple/>
                </div>
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Seo Tile* :</label>
                    <input type='text' name='seo_title' onChange={handleChange} value={formData.seo_title} className={`inpStyle  ${errors.seo_title && `border-red-700`}`}/>
                </div>
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Seo Description* :</label>
                    <input type='text' name='seo_description' onChange={handleChange} value={formData.seo_description} className={`inpStyle  ${errors.seo_description && `border-red-700`}`}/>
                </div>
            </div>
            </>}
            {steps.stepFour && <>
                    <div className="isShowInput">
                        <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Director Name:</label>
                        <input type='text' name='d_name' onChange={handleChange} value={formData.d_name} className={`inpStyle  ${errors.d_name && `border-red-700`}`}/>
                        </div>
                        <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Director Photo:</label>
                        <input type='file' name='d_photo' onChange={handleChange} className={`inpStyle  ${errors.d_photo && `border-red-700`}`}/>
                        </div>

                        <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Musician Name:</label>
                        <input type='text' name='m_name' onChange={handleChange} value={formData.m_name} className={`inpStyle  ${errors.m_name && `border-red-700`}`}/>
                        </div>
                        <div className='w-full pb-4'>
                        <label htmlFor="" className='text-white text-lg font-light font-poppins'>Musician Photo:</label>
                        <input type='file' name='m_photo' onChange={handleChange} className={`inpStyle  ${errors.m_photo && `border-red-700`}`}/>
                        </div>
                    </div>
            </>}
            {steps.stepFive && <>
            <div className="isShowInput">
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Status :</label>
                    <select name="status" onChange={handleChange} id="" className={`inpStyle  ${errors.status && `border-red-700`}`}>
                        <option selected disabled> -- Select a option --</option>

                        <option selected={formData.status === 'publish'} value="publish">Publish</option>
                        <option selected={formData.status === 'unpublish'} value="unpublish">Unpublish</option>
                    </select>
                </div>
                <div className='w-full pb-4'>
                    <label htmlFor="" className='text-white text-lg font-light font-poppins'>Premium :</label>
                    <select name="premium" onChange={handleChange} id="" className={`inpStyle  ${errors.premium && `border-red-700`}`}>
                        <option selected disabled> -- Select a option --</option>
                        <option selected={formData.status === 'true'} value="true">Yes, Premium</option>
                        <option selected={formData.status === 'false'} value="false">No, It's free</option>
                    </select>
                </div>
            </div>
            </>}

            <div className="flex gap-10 justify-center pt-10">
                <div onClick={()=>handlePrevBtn(count - 1)} className="bg-white/50 text-center rounded-md py-4 px-10  font-bold text-main hoverBtn">Prev</div>
                <div onClick={()=>handleNextBtn(count + 1)} className="bg-white text-center rounded-md py-4 px-10  font-bold text-main hoverBtn">Next</div>
            </div>
        </form>
      </div>
     {/* Upload Form End */}
    </>
  )
}


