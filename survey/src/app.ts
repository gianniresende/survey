import express from 'express'
import cors from 'cors'

class app {
  public express: express.Application
  public constructor () {
    this.express = express()
  }

  private middleawares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }
}