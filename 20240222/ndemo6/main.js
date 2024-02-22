import { createServer } from "http";
import { parse } from "url";
import { join } from "path";
import { access, readFile, constants } from "fs";

createServer(function (request, response) {
    var uri = parse(request.url).pathname;
    var filename = join(process.cwd(), uri);
    console.log(filename)
    access(filename, constants.R_OK, function (err) {
      if (err) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("404 Recurso no encontrado\n");
        return;
      }
      readFile(filename, "utf8", function (err, file) {
        if (err) {
          response.writeHead(500, { "Content-Type": "text/plain" });
          response.end(err + "\n");
          return;
        }
        response.writeHead(200);
        response.end(file, "utf8");
      });
    });
  })
  .listen(8080);
console.log("Server running at http://localhost:8080/");