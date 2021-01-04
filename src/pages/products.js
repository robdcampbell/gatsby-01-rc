import React, { Component } from "react"
import Layout from "../components/layout"
import styles from "../components/products.module.css"

export default class products extends Component {
  render() {
    return (
      <Layout>
        <div className={styles.page}>
          <h1>This is our products page</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            corrupti voluptate eos temporibus totam doloremque molestias id
            voluptatibus error sit officia commodi perspiciatis doloribus omnis.
          </p>
        </div>
      </Layout>
    )
  }
}
