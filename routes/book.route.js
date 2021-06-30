const express = require("express");
const { authMiddleware } = require("../controllers/authMiddleware");
const { createBook, getBooks, getBookById } = require("../controllers/book.controller")

const bookRouter = express.Router();
/**
 * @swagger
 *  
 * 
 *  tags:
- pet
summary: Updates a pet in the store with form data
operationId: updatePetWithForm
parameters:
- name: petId
  in: path
  description: ID of pet that needs to be updated
  required: true
  schema:
    type: string
requestBody:
  content:
    'application/x-www-form-urlencoded':
      schema:
       properties:
          name:
            description: Updated name of the pet
            type: string
          status:
            description: Updated status of the pet
            type: string
       required:
         - status
responses:
  '200':
    description: Pet updated.
    content:
      'application/json': {}
      'application/xml': {}
  '405':
    description: Method Not Allowed
    content:
      'application/json': {}
      'application/xml': {}
security:
- petstore_auth:
  - write:pets
  - read:pets
 */
bookRouter.get("/", getBooks)

bookRouter.post("/", createBook)

bookRouter.get("/:bookId", getBookById)

bookRouter.put("/:bookId", (req, res) => {
    res.json({ message: "Success" })
})

bookRouter.delete("/:bookId", (req, res) => {
    res.json({ message: "Success" })
})



module.exports = bookRouter;