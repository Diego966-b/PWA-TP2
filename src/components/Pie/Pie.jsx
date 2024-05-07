const Pie = () => {
  return (
    <footer className="bg-gray-950 text-white p-4 rounded-tr-lg rounded-tl-lg mt-8">
      <div className="flex gap-4 justify-between">
        <img src="/logohorizontal.png" alt="logodelfooter" className="w-60" />
        <div className="flex flex-col gap-2 ">
          <div className="flex">
            <p className="font-bold">Contacto:</p>
          </div>
          <div className="flex gap-3">
            <img src="/iconos/iconoTwitter.png" className="w-12 h-12" />
            <p>@WikaOficial</p>
          </div>
          <div className="flex gap-3">
            <img src="/iconos/iconoFacebook.png" className="w-12 h-12" />
            <p>WikaOficial</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mr-5">
          <div className="flex gap-3">
            <p className="font-bold">Integrantes:</p>
          </div>
          <div className="flex gap-3">
            <p>Diego Benjamin</p>
            <a href="https://github.com/Diego966-b">
              <img src="/iconos/github.png" alt="iconoGithub" className="w-12" />
            </a>
          </div>
          <div className="flex gap-3">
            <p>Fauso Biló</p>
            <a href="https://github.com/IgnacioCooper47">
              <img src="/iconos/github.png" alt="iconoGithub" className="w-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Pie;
