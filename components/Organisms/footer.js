import React, { Component } from "react";
import styles from "./Footer.module.css";
import * as gtag from "../../src/gtag";

import BigLogo from "../Molecules/logo";

export class footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      project: this.props.projectPath,
      contact: this.props.contactPath,
      service: this.props.servicePath,
      blog: this.props.blogPath,
    };
  }

  render() {
    const handler = () => {
      this.setState({
        time: this.state.time + 1,
      });

      // Information for sending to Analytics
      gtag.event({
        action: "footerContactPushTime",
        category: "time",
        label: this.state.time,
      });
    };

    return (
      <div className={styles.container}>
        {BigLogo()}
        <div className={styles.bottom}>
          <div className={styles.botto__row}>
            <p className={styles.bottom__button}>
              <a href={this.state.project}>Project →</a>
            </p>
            <p className={styles.bottom__button} onClick={handler}>
              <a href={this.state.contact}>Contact →</a>
            </p>
          </div>
          <div className={styles.botto__row}>
            <p className={styles.bottom__button}>
              <a href={this.state.service}>Service →</a>
            </p>
            <p className={styles.bottom__button}>
              <a href={this.state.blog}>Blog →</a>
            </p>
          </div>
        </div>
        <div className={styles.copyRight}>
          <p>©︎2021 Shunki Inoue</p>
        </div>
      </div>
    );
  }
}

export default footer;
