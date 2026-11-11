function App() {
  return (
    <div>
      <form action="submit">
        <div>
          <label htmlFor="nama">Siapa nama anda?</label><br />
          <input type="text" name="nama" id="nama" />
        </div>
        <div>
          <label htmlFor="umur">Berapa umur anda?</label><br />
          <input type="number" name="umur" id="umur" />
        </div>
        <div>
          <label htmlFor="m">Apa jenis kelamin anda?</label><br />
          <input type="radio" name="gender" id="m" value="m" /><label htmlFor="m">Laki-laki</label>
          <input type="radio" name="gender" id="f" value="f" /><label htmlFor="f">Perempuan</label>
        </div>
        <div>
          <label htmlFor="y">Apakah anda perokok?</label><br />
          <input type="radio" name="smoke" id="y" value="y" /><label htmlFor="y">Ya</label>
          <input type="radio" name="smoke" id="n" value="n" /><label htmlFor="n">Tidak</label>
        </div>
        <div>
          <label htmlFor="gg">Jika anda perokok, rokok apa yang pernah anda coba?</label><br />
          <input type="checkbox" name="cigs" id="gg" value="gg" /><label htmlFor="gg">Gudang Garam Filter</label><br />
          <input type="checkbox" name="cigs" id="ls" value="ls" /><label htmlFor="ls">Lucky Strike</label><br />
          <input type="checkbox" name="cigs" id="mb" value="mb" /><label htmlFor="mb">Marlboro</label><br />
          <input type="checkbox" name="cigs" id="es" value="es" /><label htmlFor="es">Esse</label><br />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Clear form</button>
        </div>
      </form>
    </div>
  )
}

export default App
