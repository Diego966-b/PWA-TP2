import styles from './Pie.module.css';

const Pie = () => {

    return (
        <footer className="bg-gray-950 text-white p-4 rounded-tr-lg rounded-tl-lg mt-8">
            <div className="flex gap-3 items-center">
                <div className="flex-auto w-64">
                    <img src="/logohorizontal.png" alt="logodelfooter" width={200}/>
                </div>
                <div className="flex-auto w-64">
                    <p className="font-bold"> Universidad Nacional del Comahue </p>
                </div>
                <div className="flex-none flex items-center ml-5 space-x-3">
                    <img src="/github-mark-white.png" alt="logodelfooter" width={50}/>
                    <p className="font-bold">pwatp2</p>
                </div>

            </div>
        </footer>
    );
}
export default Pie;