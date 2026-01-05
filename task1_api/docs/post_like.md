1) Like Post API

-> Description

This API is used to like a forum post.
When a user likes a post, their user id is saved for that post.
A user is allowed to like a post only one time.

----------------------------------------------------------------------------------------------------------

2) API Endpoint

POST
/api/posts/:postId/like
----------------------------------------------------------------------------------------------------------


3) Request Parameters

:postId
Type: String
Description: This is the id of the post that needs to be liked
You will need to pass it in URL 
e.g: http://localhost:3000/api/posts/695b81e4bc28ec1b5c6c28e8/like
----------------------------------------------------------------------------------------------------------


4) Request Body

The request body should contain the user id.

Example:

{
  "userId": "RajeshPatil123"
}           
----------------------------------------------------------------------------------------------------------

5) Success Response

Status code: 200

Example response:

{
  "success": true,
  "message": "Post liked successfully",
  "totalLikes": 5
}
----------------------------------------------------------------------------------------------------------

6) Error Responses

1. If the post does not exist

Status code: 404
{
  "success": false,
  "message": "Post not found"
}


2. If the user has already liked the post

Status code: 400
{
  "success": false,
  "message": "You have already liked this post"
}


3. If any server error occurs

Status code: 500
It will console the error!

