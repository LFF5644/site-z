<?
throw 404;
const child_process=require("child_process");


response.setHeader("Content-Type", "video/mp4");
response.setHeader("Transfer-Encoding","chunked");

const ffmpeg=child_process.spawn("/usr/bin/ffmpeg",[
	'-i', '/dev/video0',
	'-vb', '100k',
	'-preset', 'ultrafast',
	'-acodec', 'copy',
	'-f', 'mjpeg',
	'pipe:1',
]);
ffmpeg.stdout.pipe(response);

?>