import { css } from "lit";

export const reviewPageCss = css`
  body {
    padding: 0;
    margin: 0;

    background-color: #f5eff0;
  }

  .nav {
    display: flex;
    align-items: center;
    max-width: 100%;
    padding: 0px 10px;
    background-color: #4652df;
    color: white;
  }

  section {
    display: flex;
    flex-direction: column;
    margin: 50px auto 0 auto;
    max-width: 50%;
  }

  h3 {
    text-align: center;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
  }

  button {
    margin: 5px;
  }

  li {
    border-bottom: 1px solid lightblue;
    padding: 20px;
  }

  .flex-items {
    display: flex;
    flex-direction: column;
    /* max-width: 70%; */
    border: 1px solid #4652df;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 30px;
  }

  input {
    width: 400px;
  }

  :modal {
    border: 1px solid blue;
    border-radius: 5px;
    width: 600px;
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    padding: 20px;
  }
`;
