1) Like Post API

-> Description

This API is used to like a forum post.
When a user likes a post, their user id is saved for that post.
A user is allowed to like a post only one time.

This is a common feature in forum applications like NodeBB.
----------------------------------------------------------------------------------------------------------

2) API Endpoint

POST
/api/posts/postId/like
----------------------------------------------------------------------------------------------------------


3) Request Parameters

postId
Type: String
Description: This is the id of the post that needs to be liked
----------------------------------------------------------------------------------------------------------


4) Request Body

The request body should contain the user id.

Example:

{
  "userId": "123ru084uf9893ufh948r384"
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

If the post does not exist
Status code: 404


{
  "success": false,
  "message": "Post not found"
}


If the user has already liked the post
Status code: 400


{
  "success": false,
  "message": "You have already liked this post"
}


If any server error occurs
Status code: 500


{
  "success": false,
  "message": "Something went wrong"
}

