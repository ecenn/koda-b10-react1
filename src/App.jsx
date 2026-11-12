import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  nama: yup.string().required(),
  umur: yup.number().required(),
  gender: yup.string().required(),
  smoke: yup.string().required(),
})

let storage = []

function App() {
  const {handleSubmit, register, formState: {errors}} = useForm({defaultValues:{
    nama: "",
    umur: "",
    gender: "",
    smoke: "",
    cigs: "",
  },
  resolver: yupResolver(schema)
  })

  const submitted = (data) => {
    storage.push(data)
    const container = JSON.stringify(storage)
    window.localStorage.setItem("respondent", container)
  }
  
  return (
    <>
      <div className="font-sans bg-gray-100 w-full flex flex-col gap-2">
        <div className="flex w-full items-center justify-center pt-2">
            <div className="flex flex-col justify-center gap-2 w-5/12 bg-white border border-gray-300 rounded-2xl overflow-hidden">
                <div className="bg-blue-600 h-[20px] w-full"></div>
                <h1 className="px-10 py-2 text-3xl font-bold">Form Survey Perokok</h1>
                <p className="px-10 pb-1 text-black-400">Isi form dibawah ini dengan jawaban yang sebenarnya.</p>
                <div className="text-sm flex justify-between px-10 py-2 border-y border-gray-300">
                    <p><span className="text-sm font-bold text-gray-800">example@gmail.com</span> <span className="text-blue-600">Switch Account</span></p>
                    <p className="text-gray-400">cloud</p>
                </div>
                <p className="text-red-600 px-10 py-0 pb-2">* Indicates required question</p>
            </div>
        </div>
        <div className="w-full flex justify-center items-center">
        
        
          <form onSubmit={handleSubmit(submitted)} action="submit" className="w-5/12 flex flex-col gap-2">
        
            <div className="flex flex-col justify-center gap-2 bg-white border border-gray-300 rounded-2xl p-10">
              <label htmlFor="nama">Siapa nama anda? <span className="text-red-600">*</span></label>
              <input {...register("nama")} type="text" name="nama" id="nama" placeholder="Your answer" className="border-b border-gray-400 w-1/2 text-sm" />
              {errors.nama && <p role="alert">{errors.nama.message}</p>}
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white border border-gray-300 rounded-2xl p-10">
              <label htmlFor="umur">Berapa umur anda? <span className="text-red-600">*</span></label>
              <input {...register("umur")} type="number" name="umur" id="umur" placeholder="Your answer" className="border-b border-gray-400 w-1/2 text-sm" />
              {errors.umur && <p role="alert">{errors.umur.message}</p>}
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white border border-gray-300 rounded-2xl p-10">
              <label htmlFor="m">Apa jenis kelamin anda? <span className="text-red-600">*</span></label>
              <div className="flex gap-2">
                <input {...register("gender")} type="radio" name="gender" id="m" value="m" />
                <label htmlFor="m">Laki-laki</label>
              </div>
              <div className="flex gap-2">
                <input {...register("gender")} type="radio" name="gender" id="f" value="f" />
                <label htmlFor="f">Perempuan</label>
              </div>
              {errors.gender && <p role="alert">{errors.gender.message}</p>}
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white border border-gray-300 rounded-2xl p-10">
              <label htmlFor="y">Apakah anda perokok? <span className="text-red-600">*</span></label>
              <div className="flex gap-2">
                <input {...register("smoke")} type="radio" name="smoke" id="y" value="y" />
                <label htmlFor="y">Ya</label>
              </div>
              <div className="flex gap-2">
                <input {...register("smoke")} type="radio" name="smoke" id="n" value="n" />
                <label htmlFor="n">Tidak</label>
              </div>
              {errors.smoke && <p role="alert">{errors.smoke.message}</p>}
            </div>
            <div className="flex flex-col justify-center gap-2 bg-white border border-gray-300 rounded-2xl p-10">
              <label htmlFor="gg">Jika anda perokok, rokok apa yang pernah anda coba?</label>
              <div className="flex flex-col items-start">
                <div className="flex gap-2">
                  <input {...register("cigs")} type="checkbox" name="cigs" id="gg" value="gg" /><label htmlFor="gg">Gudang Garam Filter</label>
                </div>
                <div className="flex gap-2">
                  <input {...register("cigs")} type="checkbox" name="cigs" id="ls" value="ls" /><label htmlFor="ls">Lucky Strike</label>
                </div>
                <div className="flex gap-2">
                  <input {...register("cigs")} type="checkbox" name="cigs"  id="mb" value="mb" /><label htmlFor="mb">Marlboro</label>
                </div>
                <div className="flex gap-2">
                  <input {...register("cigs")} type="checkbox" name="cigs" id="es" value="es" /><label htmlFor="es">Esse</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <button type="submit" className="border bg-blue-600 py-2 px-4 rounded-lg text-white text-sm">Submit</button>
              <button type="reset" className="text-blue-600 text-sm py-2 px-4">Clear form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App