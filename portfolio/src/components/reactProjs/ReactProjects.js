import React from "react";

class ReactProjects extends React.Component {
  state = {
    projects: [
      {
        title: "youtube API",
        imageUrl: "portfolio/images/youtubevedios-min.png",
        targetUrl: "https://webababy.github.io/youtubevideos/"
      },
      {
        title: "image waterfall",
        imageUrl: "portfolio/images/imagewaterfall-min.png",
        targetUrl: "https://webababy.github.io/imageWaterfall/"
      },
      {
        title: "robot image show",
        imageUrl: "portfolio/images/robotfriends-min.png",
        targetUrl: "https://webababy.github.io/robofriends/"
      }
    ]
  };

  renderProjects = () => {
    return this.state.projects.map(proj => {
      return (
        <div className="six wide column box-shadow" key={proj.title}>
          <h5 style={{ textAlign: "center" }}>{proj.title}</h5>
          <a href={proj.targetUrl} target="_blank" rel="noopener noreferrer">
            <img alt={proj.title} src={proj.imageUrl} />
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h1>React projects</h1>
        <div className="ui grid">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default ReactProjects;
