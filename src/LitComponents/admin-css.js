import { css } from "lit";

export const adminPageCss = css`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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

  .input-section {
    display: flex;
    flex-direction: column;
    margin: 50px auto 0 auto;
    max-width: 50%;
    border: 1px solid #4652df;
    border-radius: 10px;
    padding: 15px;
  }
  .q-input {
    width: 90%;
  }
  input {
    border: none;
    color: #444;
    font-size: 1.2rem;
    padding: 0.7rem 1rem;
    border-radius: 2px;
    border: 1px solid blue;
    width: 75%;
    border-radius: 5px;
    margin: 5px auto;
  }

  button:hover {
    transform: translateY(-2px);
  }

  input::placeholder {
    color: #9797fd;
  }

  input:focus {
    outline-color: #4652df;
  }

  .title h3:hover {
    transform: translateY(-3px);
  }

  .btns {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    padding: 20px;
  }

  button {
    border: 1px solid rgb(179, 131, 226);
    width: 30%;
    margin: inherit;

    height: 35px;
    border-radius: 5px;
    background-color: #4652df;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  }

  .validation-msg-hide {
    display: none;
  }

  .validation-msg-show {
    display: block;
    color: red;
  }

  button:hover {
    transform: translateY(-2px);
  }

  #snackbar {
    visibility: hidden;
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
  }

  h3 {
    text-align: center;
  }

  #snackbar.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`;
