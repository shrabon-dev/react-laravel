<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Video;
use App\Http\Requests\StoreVideoRequest;
use App\Http\Requests\UpdateVideoRequest;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Http\UploadedFile;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
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
             return $this->saveFile($save->getFile());
         }

         // we are in chunk mode, lets send the current progress
         /** @var AbstractHandler $handler */
         $handler = $save->handler();

         return response()->json([
             "done" => $handler->getPercentageDone(),
             'status' => true
         ]);

    }
    protected function saveFile(UploadedFile $file)
    {
        $fileName = $this->createFilename($file);
        // Group files by mime type
        $mime = str_replace('/', '-', $file->getMimeType());
        // Group files by the date (week
        $dateFolder = date("Y-m-W");

        // Build the file path
        $filePath = "public/uploads/video";
        $finalPath = storage_path("app/".$filePath);

        // $customeName =  time().'_'.$file->getClientOriginalName();
        // move the file name
        $file->move($finalPath, $file->getClientOriginalName());

        return response()->json([
            'path' => $filePath,
            'name' => $file->getClientOriginalName(),
            'mime_type' => $mime
        ]);
    }

    /**
     * Create unique filename for uploaded file
     * @param UploadedFile $file
     * @return string
     */
    protected function createFilename(UploadedFile $file)
    {
        $extension = $file->getClientOriginalExtension();
        $filename = $file->getClientOriginalName(); // Filename without extension
        // $filename = str_replace(".".$extension, "", $file->getClientOriginalName()); // Filename without extension

        // Add timestamp hash to name of the file
        $filename .= "_" . md5(time()) . "." . $extension;

        return $filename;
    }
    // private function allChunksUploaded($chunkPath, $totalChunks)
    // {
    //     return count(glob($chunkPath . '*')) == $totalChunks;
    // }
    // private function concatenateChunks($chunkPath, $totalChunks, $filename)
    // {
    //     $finalFilepath = storage_path('app/public/uploads/video/') . $filename;
    //     $finalFile = fopen($finalFilepath, 'wb');

    //     for ($i = 1; $i <= $totalChunks; $i++) {
    //         $chunkFilename = $i . '_' . $totalChunks . '_' . $filename;
    //         $chunkFilepath = $chunkPath . $chunkFilename;
    //         $chunkContent = file_get_contents($chunkFilepath);

    //         fwrite($finalFile, $chunkContent);

    //         // Optionally, you can delete the individual chunks after concatenation
    //         unlink($chunkFilepath);
    //     }

    //     fclose($finalFile);
    // }

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
