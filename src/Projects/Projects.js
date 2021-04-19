import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <Query
      query={gql`
        {
          projects {
            edges {
              node {
                title
                slug
                content
                projectMeta {
                  field1
                  field2
                }
              }
            }
          }
        }
      `}
    >
      {(loading, error, data) => {
        if (loading) {
          return <h2>Loading...</h2>;
        }
        console.log("data :>> ", loading, error, data);

        return (
          <div>
            {data.projects.edges.map((project, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: "#ccc", padding: "10px" }}
                >
                  <Link to={`project/${project.node.slug}`}>
                    <h2>{project.node.title}</h2>
                  </Link>
                  <p>{project.node.content.substring(0, 100)}</p>
                </div>
              );
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default Projects;
