// Import required modules and configuration
import mongoose from 'mongoose'
import { dbName, dbUrl } from './initialConfig.js'
import chalk from 'chalk'

// Async function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Connect to the database with the provided URL and name
    await mongoose.connect(dbUrl, { dbName })
    // Log success message in green
    console.log(`${chalk.green.bold('Connected')} to the database`)
  } catch (error) {
    // Log error message in red and exit the application
    console.log(`${chalk.red.bold('Error')} connecting to database`, error)
    process.exit(1)
  }
}

// Export the connectDB function
export default connectDB
