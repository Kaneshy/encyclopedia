'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { categories } from "@/constants/index";


const UploadPage = () => {
  const [img, setImg] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [imgPerc, setImgPerc] = useState(0);
  const [videoPerc, setVideoPerc] = useState(0);
  const [inputs, setInputs] = useState({});
  const [tags, setTags] = useState([]);
  const router = useRouter()


  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleTags = (e) => {
    setTags(e.target.value.split(","));
  };


  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(inputs, tags)
    const b = { ...inputs }

    console.log('ddfdf', imageUrl)
    try {
      const res = await axios.post("/api/Tarjet", { ...inputs, tags, imgUrl: imageUrl, selectedClothing })
      console.log('upload status', res.data)

      if (res.status === 200) {
        router.push('/');
      }

    } catch (error) {
      console.log('ddd', error.message)
    }
  }


  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const [imageUrl, setimageUrl] = useState('')
  const [selectedClothing, setSelectedClothing] = useState([]);


  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    }

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(({ name }) => name === 'file');

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }

    formData.append('upload_preset', 'my-uploads');

    const data = await fetch('https://api.cloudinary.com/v1_1/dh01ngdjo/image/upload', {
      method: 'POST',
      body: formData
    }).then(r => r.json());

    setimageUrl(data.secure_url);
    console.log(data.secure_url, 'gg')
    setInputs((prev) => {
      return { ...prev, imgUrl: data.secure_url };
    });
    setUploadData(data);


  }

  const handleClothingSelection = (clothing) => {
    if (selectedClothing.includes(clothing)) {
      // Si la prenda ya está seleccionada, la quitamos de la selección
      setSelectedClothing(selectedClothing.filter(item => item !== clothing));
    } else {
      // Si la prenda no está seleccionada, la añadimos a la selección
      setSelectedClothing([...selectedClothing, clothing]);
    }
  }





  return (
    <main>
      <div className="max-w-xl mx-auto mt-8 p-4 bg-neutral-900 rounded-lg">
        <h1 className='text-center  font-bold text-2xl text-white border-a1 pb-2 mb-6 '>Upload new book </h1>

        <section className='py-4'>
          <form className='flex flex-col gap-6' method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>

            <div className='' >
              <div className='flex flex-col w-full items-center  justify-center ' >
                <label htmlFor='archivo' className="bg-blue-3 select-none border-black border rounded py-1 px-2 hover:border-white"  >Select from computer</label>
                <input id="archivo" className="hidden" type="file" name="file" />
              </div>

            </div>
            <div>
              {imageUrl}
            </div>
            <div className="w-full items-center justify-center flex">
              <img className='max-w-sm' src={imageSrc} />
            </div>
            {imageSrc && !uploadData && (
              <button className="bg-blue-3 select-none border-black border rounded py-1 px-2 hover:border-white">Upload Image</button>
            )}

          </form>


        </section>


        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="title" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Título (required): </label>
          <input type="text" id="title" name='title' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
        </div>

        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="link" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Link (required): </label>
          <input type="text" id="title" name='link' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
        </div>

        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="linkb" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Link b (required): </label>
          <input type="text" id="title" name='linkb' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
        </div>

        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="watched" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Last Watched  </label>
          <input type="number" id="watched" name='watched' onChange={handleChange} className="border-neutral-500 border  bg-neutral-900 p-2 w-full text-white" />
        </div>

        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="tags" className="text-small-semibold block text-gray-400 font-bold mb-2">Tags: (music,art,animation,drawing,dance...)</label>
          <input type="text" id="tags" onChange={handleTags} className="border-gray-500 border rounded bg-neutral-900  p-2 w-full text-white" />
        </div>


        <section className="mb-4 border-gray-500 border p-2 w-full">
          <div className="mb-4 border-gray-500 border p-2 w-full">
            <h3>Prendas seleccionadas:</h3>
          </div>
          <div className="mb-4 border-gray-500 border   p-2 w-full">
            <div>
              {categories.map((clothing, index) => (
                <button
                  key={`prendas${index * 8}`}
                  style={{ margin: '5px' }}
                  onClick={() => handleClothingSelection(clothing)}
                  className={selectedClothing.includes(clothing) ? 'selected' : ''}
                >
                  <p className="p-2 rounded bg-slate-700">{clothing}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4  border-gray-500 border  p-2 w-full">
            <div className="gap-2 p-2">
              {selectedClothing.map((item, index) => (
                <button
                  style={{ margin: '5px' }}
                  onClick={() => handleClothingSelection(item)}
                  className="p-2 rounded bg-slate-600" key={`selectedClothing${index * 5}`}>{item}</button>
              ))}
            </div>
          </div>

        </section>

        <div className="mb-4 border-gray-500 border   p-2 w-full">
          <label htmlFor="description" className="text-small-semibold block text-gray-400 font-bold mb-2">Descripción:</label>
          <textarea id="description" name='desc' onChange={handleChange} className="border-gray-500 border rounded bg-neutral-900 p-2 w-full h-24 text-white"></textarea>
        </div>


        <button
          type="submit"
          className="bg-blue-1 w-full hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          onClick={handleUpload}
        >
          Submit
        </button>


      </div>
    </main>
  )
}

export default UploadPage