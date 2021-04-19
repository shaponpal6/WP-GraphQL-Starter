import React from "react";
// import { Query } from "react-apollo";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  render() {
    const props = this.props;
    console.log("props :>> ", props);

    if (!props.data.project) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div style={{ backgroundColor: "#ccc", padding: "10px" }}>
          <h2>{props.data.project.title}</h2>
          <div>
            <strong>{props.data.project.projectMeta.field1}</strong>
            <strong>{props.data.project.projectMeta.field2}</strong>
          </div>
          .data
          <p>{props.data.project.content}</p>
        </div>
      </div>
    );
  }
}

const getProjectBySlug = gql`
  query getProjectBySlug($slug: String) {
    project: projectBy(uri: $slug) {
      title
      projectMeta {
        field1
        field2
      }
    }
  }
`;
export default graphql(getProjectBySlug, {
  options: (props) => {
    const slug = props.match.params.slug;
    return {
      variables: { slug },
    };
  },
})(Project);
