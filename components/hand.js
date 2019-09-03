const React = require("react");

class Hand extends React.Component {
  render() {
    return (
      <svg
        id="Capa_1"
        className="hand-scroll"
        enableBackground="new 0 0 512 512"
        height="48"
        viewBox="0 0 512 512"
        width="48"
        fill={this.props.color || "black"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m420.978 86.609-21.133-21.133-22.757 22.758v-87.312h-29.887v87.312l-22.758-22.758-21.132 21.133 58.833 58.834z" />
        <path d="m330.282 232.76c-5.015 0-9.816.93-14.245 2.62-6.517-13.336-20.219-22.545-36.034-22.545-5.671 0-11.067 1.191-15.961 3.324-7.046-11.633-19.85-19.428-34.448-19.428-3.569 0-7.029.472-10.326 1.346v-39.752c11.597-6.263 21.571-15.155 29.185-26.125 9.81-14.132 14.995-30.723 14.995-47.979 0-46.44-37.781-84.221-84.22-84.221s-84.221 37.781-84.221 84.221c0 17.358 5.241 34.03 15.158 48.213 7.518 10.753 17.301 19.485 28.653 25.688v101.047c-26.59 1.378-47.796 23.343-47.796 50.147v63.279l65.78 82.259v57.146h177.763l.276-65.101 35.726-63.56-.201-110.495c-.001-22.103-17.982-40.084-40.084-40.084zm-205.389-148.539c0-29.96 24.374-54.334 54.334-54.334s54.334 24.374 54.334 54.334c0 14.03-5.26 27.03-14.293 36.826v-12.605c.045-10.731-4.155-20.858-11.825-28.517-7.62-7.607-17.707-11.821-28.404-11.867-.058 0-.112 0-.17 0-22.006 0-39.958 17.93-40.051 40.108v12.284c-8.741-9.796-13.925-22.651-13.925-36.229zm180.094 354.796-.182 43.097h-118.117v-37.74l-65.78-82.259v-52.798c0-11.209 9.225-20.329 20.563-20.329l27.233-1v-179.758c.024-5.695 4.59-10.318 10.209-10.285 5.698.024 10.492 4.773 10.468 10.434v164.464h29.886v-36.03c0-5.622 4.632-10.197 10.326-10.197s10.326 4.574 10.326 10.197v36.03h29.886v-19.926c0-5.622 4.574-10.197 10.197-10.197s10.196 4.574 10.196 10.197v19.926h29.886c0-5.623 4.574-10.197 10.197-10.197s10.197 4.574 10.197 10.224l.186 102.669z" />
      </svg>
    );
  }
}

module.exports = Hand
