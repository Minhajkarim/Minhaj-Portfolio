import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dbyte from "../../Assets/Projects/d-byte.png";
import flamengo from "../../Assets/Projects/flamengo.png";
import apev from "../../Assets/Projects/apev.png";
import gicogang from "../../Assets/Projects/gico-gang.png";
import editor from "../../Assets/Projects/editor.png";
import king from "../../Assets/Projects/king.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbyte}
              isBlog={false}
              title="Design Bytes"
              description="Website for Design Bytes International. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries. Design Bytes is a software company located in Gilgit Pakistan."
              ghLink="https://github.com/Minhajkarim/d-byte"
              demoLink="http://d-byte.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flamengo}
              isBlog={false}
              title="Flamengo NFT Website"
              description="Flamengo is a NFT website. This website is fully responsive and full of animations. Created with react app. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries "
              ghLink="https://github.com/Minhajkarim/Flamengo"
              demoLink="http://flamengo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apev}
              isBlog={false}
              title="Apevolution"
              description="Apevolution is a NFT website. This website is fully responsive and full of animations. Created with react app. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries  "
              ghLink="https://github.com/Minhajkarim/Apevolution-React-App"
              demoLink="http://apevolution-react-app.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gicogang}
              isBlog={false}
              title="Gico Gang"
              description="Gico Gang is a NFT website. This website is fully responsive and full of animations. Created with react app. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries ."
              ghLink="https://github.com/Minhajkarim/React_Website"
              demoLink="http://react-website-phi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Online Photo Editing App"
              description="This is an online photo editing website for photographers. This website is fully responsive and full of animations. Created with react app. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries ."
              ghLink="https://github.com/Minhajkarim/Image-Editor-App"
              demoLink="http://image-editor-app-tau.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={king}
              isBlog={false}
              title="King NFT Website"
              description="Krypto King is a NFT website. This website is fully responsive and full of animations. Created with react app. This website is created on react js, material UI, HTML, CSS, JavaScript, and other libraries ."
              ghLink="https://github.com/seer11/kings_nft"
              demoLink="http://kings-nft.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
