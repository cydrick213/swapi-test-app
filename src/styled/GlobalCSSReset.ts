import { createGlobalStyle } from 'styled-components'

export const GlobalCSSReset = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  },
  .site-page-header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  },
  /* Override ant-design classname - Start*/
  .ant-page-header-heading-title {
    font-family: 'Bigelow Rules'!important;
    font-size: 37px !important;
    color: #0ccac4 !important;
    text-align: center !important;
  },
  /* Override ant-design classname - End*/
  .content-wrapper {
    width: 90%;
    margin: auto;
    min-height: 680px;
  },

  .search-form {
    align-content: center;
    display: flex;
    justify-content: center;
  },

  .mt-10 {
    margin-top: 10px;
  },

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  },

  .card-wrapper {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;
  },

  .card-wrapper:hover {
    transform: scale(1.05);
  },

  .mb-20 {
    margin-bottom: 20px;
  },

  .media-card {
    width: 250px !important;
    margin: 10px 20px !important;
    background: #95dada !important;
  },

  .image-container {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
  }
`
