import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import "../../assets/styles/previewcard.scss";
import { SVG1 } from "../../assets/svg/PreviewCard";

const PreviewCard = ({ name, image, propertyDevelopment }) => {
  const [directory, setDirectory] = useState("");

  useEffect(() => {
    if (propertyDevelopment) {
      setDirectory("propertyprojects");
    }
  }, []);

  return (
    <Col xs={4} className="preview-card">
      <div className="preview-card__inner">
        <img
          className="preview-card__image d-block w-100"
          src={require(`../../assets/images${image}`).default}
          alt="First slide"
        />
        <div className="preview-card__overlay" />
        <div className="preview-card__caption caption">
          <h3 className="preview-card__name caption__name">{name}</h3>
          <div className="caption__background">
            <SVG1 className={"svg"} />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default PreviewCard;
