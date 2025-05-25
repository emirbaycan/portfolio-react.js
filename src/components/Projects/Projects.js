import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import kp from "../../Assets/Projects/kp.jpg";
import mb from "../../Assets/Projects/mb.jpg";
import tk from "../../Assets/Projects/tk.jpg";
import de from "../../Assets/Projects/de.jpg";
import hep from "../../Assets/Projects/hep.jpg";
import tables from "../../Assets/Projects/tables.webp";
import kalenuxer from "../../Assets/Projects/kalenuxer.png";
import myp from "../../Assets/Projects/myp.webp";
import hya from "../../Assets/Projects/hya.webp";
import morkoc from "../../Assets/Projects/morkoc.webp";
import est from "../../Assets/Projects/est.webp";
import eb_v1 from "../../Assets/Projects/eb_v1.webp";
import { Trans, useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <Trans t={t}>projects_header</Trans>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects_description')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myp}
              isSite={true}
              title="My Partners"
              description={t('project_myp_description')}
              ghLink="https://www.mypartnerslawfirm.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hya}
              isSite={true}
              title="Hukuki Yeterlilik Akademisi"
              description={t('project_hya_description')}
              ghLink="https://www.hukukiyeterlilikakademisi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={morkoc}
              isSite={true}
              title="Morkoç"
              description={t('project_morkoc_description')}
              ghLink="https://www.morkoc.av.tr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={est}
              isSite={true}
              title="Eyüp Sultan Tulumbacısı"
              description={t('project_est_description')}
              ghLink="https://www.eyupsultantulumbacisi.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hep}
              isSite={true}
              title="Hukuk Eğitim Programları"
              description={t('project_hep_description')}
              ghLink="https://www.hukukegitimprogramlari.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={de}
              isSite={true}
              title="Do Eloboost"
              description={t('project_de_description')}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mb}
              isSite={true}
              title="Murat Bulat Law Firm"
              description={t('project_mb_description')}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tk}
              isSite={true}
              title="Terapi Kliniği"
              description={t('project_tk_description')}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kp}
              isSite={true}
              title="Karalar Prefabrik"
              description={t('project_kp_description')}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eb_v1}
              isSite={true}
              title="My Old Portfolio"
              description={t('project_eb_v1_description')}
              ghLink="http://lamp.emirbaycan.com.tr"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalenuxer}
              isSite={false}
              title="Kalenuxer"
              description={t('project_kalenuxer_description')}
              ghLink="https://github.com/kalinux0/Kalenuxer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tables}
              isSite={false}
              title="Tables"
              description={t('project_tables_description')}
              ghLink="https://github.com/kalinux0/css_js_html_tools/tree/main/kalenux/table"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
