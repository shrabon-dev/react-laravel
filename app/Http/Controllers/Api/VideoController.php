<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use App\Http\Resources\VideoResource;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Http\UploadedFile;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = Video::all();
        return VideoResource::collection($datas);
    }
    public function list()
    {
        return 'video list';
    }

    /**
     * Store a newly created resource in storage.
     */
    // public function store(StoreVideoRequest $request)
    public function store(HttpRequest $request)
    {

    
        if($request->title){
                    $castPhotos = [];
                if ($request->hasFile('cast')) {
                    foreach ($request->file('cast') as $index=>$castFile) {
                        $cast = time().'_'.$index.'_'. $castFile->getClientOriginalName();
                        $castPhotos[] = $cast;
                        $castFile->storeAs('uploads/cast/', $cast, 'public');
                    }
                }

               // Store the file in the public/uploads folder
               if ($request->hasFile('thumbnail')) {
                $thumbName = time() . '_' . $request->file('thumbnail')->getClientOriginalName();
                $request->file('thumbnail')->storeAs('uploads/thumbnail/', $thumbName, 'public');

                }
                // Director Photo Upload In Diroctor Folder
               if ($request->hasFile('d_photo')) {
                $d_photo = time() . '_' . $request->file('d_photo')->getClientOriginalName();
                $request->file('d_photo')->storeAs('uploads/director/', $d_photo, 'public');

                }
                // Musician Photo Upload In Musician Folder
               if ($request->hasFile('m_photo')) {
                $m_photo = time() . '_' . $request->file('m_photo')->getClientOriginalName();
                $request->file('m_photo')->storeAs('uploads/musician/', $m_photo, 'public');

                }


            Video::create($request->except('_token','cast','thumbnail','d_photo','m_photo')+[
                'cast'=>$castPhotos ? implode(',',$castPhotos) : null,
                'thumbnail'=>$thumbName ? $thumbName : null,
                'd_photo'=>$request->hasFile('d_photo') ? $d_photo : null,
                'm_photo'=>$request->hasFile('m_photo') ? $m_photo : null,
            ]);
            return response(['message' => 'Successfully uploaded!!']);
        }
        // $data = $request->validated();

        // create the file receiver
        $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request));

        // check if the upload is success, throw exception or return response you need
        if ($receiver->isUploaded() === false) {
        throw new UploadMissingFileException();
        }

        // receive the file
        $save = $receiver->receive();

        // check if the upload has finished (in chunk mode it will send smaller files)
        if ($save->isFinished()) {
        // save the file and return any response you need, current example uses `move` function. If you are
        // not using move, you need to manually delete the file by unlink($save->getFile()->getPathname())
        return $this->saveFile($save->getFile(), $request);
        }

        // we are in chunk mode, lets send the current progress
        /** @var AbstractHandler $handler */
        $handler = $save->handler();

        return response()->json([
        "data" => $request,
        "done" => $handler->getPercentageDone(),
        "status" => true,
        ]);
    }
    public function video_upload(Request $request) {  
        try{
            // create the file receiver
            $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request));
                
            // check if the upload is success, throw exception or return response you need
            if ($receiver->isUploaded() === false) {
                throw new UploadMissingFileException();
            }

            // receive the file
            $save = $receiver->receive();

            // check if the upload has finished (in chunk mode it will send smaller files)
            if ($save->isFinished()) {
                // save the file and return any response you need, current example uses `move` function. If you are
                // not using move, you need to manually delete the file by unlink($save->getFile()->getPathname())
                return $this->saveFile($save->getFile(), $request);
            }

            // we are in chunk mode, lets send the current progress
            /** @var AbstractHandler $handler */
            $handler = $save->handler();

            return response()->json([
                "done" => $handler->getPercentageDone(),
                'status' => true
            ]);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
     
      }
    protected function saveFile(UploadedFile $file, Request $request) {
        $user_obj = auth()->user();
        $fileName = $this->createFilename($file);
   
        // Get file mime type
        $mime_original = $file->getMimeType();
        $mime = str_replace('/', '-', $mime_original);
   
        $folderDATE = $request->dataDATE;
   
        $folder  = $folderDATE;
        $filePath = "public/uploads/medialibrary/{$user_obj->id}/{$folder}/";
        $finalPath = storage_path("app/".$filePath);
   
        $fileSize = $file->getSize();
        // move the file name
        $file->move($finalPath, $fileName);
   
        $url_base = 'storage/upload/medialibrary/'.$user_obj->id."/{$folderDATE}/".$fileName;
   
        return response()->json([
         'path' => $filePath,
         'name' => $fileName,
         'mime_type' => $mime
        ]);
     }
   
     /**
      * Create unique filename for uploaded file
      * @param UploadedFile $file
      * @return string
      */
      protected function createFilename(UploadedFile $file) {
        $extension = $file->getClientOriginalExtension();
        $filename = str_replace(".".$extension, "", $file->getClientOriginalName()); // Filename without extension
   
        //delete timestamp from file name
        $temp_arr = explode('_', $filename);
        if ( isset($temp_arr[0]) ) unset($temp_arr[0]);
        $filename = implode('_', $temp_arr);
   
        //here you can manipulate with file name e.g. HASHED
        return $filename.".".$extension;
      }
   


    public function show($id)
    {

        $data = Video::find($id);
        return response($data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVideoRequest $request, Video $video,$id)
    {
        $data = $request->validated();

        // $value = $video->updated($data);
        Video::find($id)->update($data);
        return response(['message'=>'Successfully updated!!']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Video $video)
    // public function destroy($id)
    {
        $video->delete();
        return response(['message'=>'Successfully deleted!!']);

    }
}
