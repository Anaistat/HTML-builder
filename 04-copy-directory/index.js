function copyDir(){
    const fs = require('fs');
    const path = require('path');

    fs.mkdir(path.join(__dirname, 'files-copy'),
        { recursive: true }, (err) => {
            if (err) {
                return console.error(err);
            }
            fs.readdir(path.resolve(__dirname, 'files'), function (error, files) {
                if (error) {
                    console.error('Could not list the directory.');
                }
                else{

                    files.forEach((file)=>{
                        fs.copyFile(path.join(__dirname, 'files', file), (path.join(__dirname, 'files-copy', file)), (err)=>{
                            if(err) throw err
                            else{
                                console.log("File copied successfully")
                            }
                        })
                    })
                }
            })
        });
}

copyDir()