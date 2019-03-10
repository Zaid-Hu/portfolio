import React from "react";

class JsProjects extends React.Component {
  state = {
    projects: [
      {
        title: "Travel",
        imageUrl: "../../images/clearView-min.png",
        targetUrl: "https://webababy.github.io/samleTravelSite/"
      },
      {
        title: "Recipe finder",
        imageUrl: "/images/food2fork-min.png",
        targetUrl: "https://webababy.github.io/food2forkAPIProjOnline/"
      },
      {
        title: "Omnifood",
        imageUrl: "/images/Omnifood-min.png",
        targetUrl: "https://webababy.github.io/foodSiteStatic/"
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
        <h1>JS projects</h1>
        <div className="ui grid">{this.renderProjects()}</div>
      </div>
    );
  }
}

export default JsProjects;
