import qrimage from './assets/image-qr-code.png'

function App() {
  return (
        <div className="text-center wrapper mt-5">
            <img src={qrimage} alt="qr-image" />
            <h3 className='title'>Improve your front-end skills by building projects</h3>
            <p className="text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
  );
}

export default App;