import React from 'react';
//import { InputText } from 'primereact/inputtext';
//import { Dialog } from 'primereact/dialog';

function Upload()
{

    function Fileread(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
          // The file's text will be printed here
          console.log(event.target.result)
        };
      
        reader.readAsText(file);
      }

    return(
        <>
        <form>
        <div className="prfile_img text-center p-4">
                <div className="flex flex-column justify-center align-items-center">
                   File: <input type="file" accept=".sol" onChange={Fileread}/><br/>
                   <button className='btn btn-danger' type='submit' value='submit'>Submit</button>
                </div>
            </div>
        </form>
             
        </>      
    )
}

export default Upload;