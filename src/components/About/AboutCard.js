import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

import { Trans, useTranslation } from "react-i18next";
 
function AboutCard() {
  
  const {t}  = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <Trans>about_content</Trans>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('about_activity_1')} 
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about_activity_2')} 
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('about_activity_3')} 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('about_quote')}"{" "}
          </p>
          <footer className="blockquote-footer">Emir</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
