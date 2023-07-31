import '../Preview/preview.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useState } from 'react';
const Preview = () => {
  const [activeDot, setActiveDot] = useState(false);

  const handleClickOnIcon = () => {
    setTimeout(() => {
      setActiveDot(false);
    }, 300);
  };

  return (
    <section className="preview">
      <div className="container">
        <div className="preview__content">
          <div className="preview__content-promo">
            <h1 className="preview__content-title">Gold big hoops </h1>
            <p className="preview__content-text">$ 68,00</p>
            <button className="preview__content-btn">View Product</button>
          </div>
          <div className="preview__content-icons">
            {/* activeDot === false ? (
            <AdjustIcon style={{ color: 'white', cursor: 'pointer', transition: '0.4s' }} />
            ) : (
            <FiberManualRecordIcon
              onClick={handleClickOnIcon}
              fontSize="verysmall"
              style={{ color: 'white', cursor: 'pointer', transition: '0.4s' }}
            />
            ) */}
            {/* <AdjustIcon style={{ color: 'white', cursor: 'pointer' }} />
            <FiberManualRecordIcon
              fontSize="verysmall"
              style={{ color: 'white', cursor: 'pointer' }}
            /> */}
            {/* <FiberManualRecordIcon
              fontSize="verysmall"
              style={{ color: 'white', cursor: 'pointer' }}
            />
            <FiberManualRecordIcon
              fontSize="verysmall"
              style={{ color: 'white', cursor: 'pointer' }}
            />
            <FiberManualRecordIcon
              fontSize="verysmall"
              style={{ color: 'white', cursor: 'pointer' }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
