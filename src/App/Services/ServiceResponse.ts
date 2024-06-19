import { Response } from "express";

// Interface to define the shape of the service response
interface IServiceResponse {
  success?: boolean; // Optional: Indicates whether the operation was successful
  message: string;   // A message describing the result of the operation
  status: number;    // HTTP status code
  data?: any;        // Optional: Additional data to include in the response
  response: Response; // The Express response object to send the response
}

// Class representing a standardized service response
export class ServiceResponse {
  success?: boolean; // Optional: Indicates whether the operation was successful
  message: string;   // A message describing the result of the operation
  data?: any;        // Optional: Additional data to include in the response
  response: Response; // The Express response object to send the response
  status: number;    // HTTP status code

  // Constructor to initialize the service response
  constructor({ success = true, message, data = [], status, response }: IServiceResponse) {
    this.success = success;   // Set the success status
    this.message = message;   // Set the response message
    this.data = data;         // Set the response data
    this.response = response; // Set the Express response object
    this.status = status;     // Set the HTTP status code
    this.toSend();            // Send the response immediately
  }

  // Method to send the response using the Express response object
  toSend() {
    return this.response.status(this.status).json(this.toJSON());
  }

  // Method to format the response data as JSON
  toJSON() {
    return {
      success: this.success, // Include success status in the response
      message: this.message, // Include the message in the response
      data: this.data,       // Include the data in the response
    };
  }
}
  