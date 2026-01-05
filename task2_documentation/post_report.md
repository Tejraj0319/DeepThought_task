1) Report Post API

2) Description

This API is used to report a forum post.
Users can report a post if they feel the content is spam, abusive, or not appropriate.

This feature helps moderators review and take action on reported posts.

----------------------------------------------------------------------------------------------------------

3) API Endpoint

POST
/api/posts/postId/report

----------------------------------------------------------------------------------------------------------

4) Request Parameters

postId
Type: String
Description: The id of the post that the user wants to report

----------------------------------------------------------------------------------------------------------

5) Request Body

-> The request body contains the reason for reporting the post.

Example:


{
  "userId": "user123",
  "reason": "Spam content"
}

----------------------------------------------------------------------------------------------------------

6) Success Response

-> Status code: 200

Example response:


{
  "success": true,
  "message": "Post reported successfully"
}

----------------------------------------------------------------------------------------------------------

7) Error Responses

-> If the post is not found
Status code: 404


{
  "success": false,
  "message": "Post not found"
}


-> If reason is not provided
Status code: 400


{
  "success": false,
  "message": "Report reason is required"
}


-> If server error occurs
Status code: 500


{
  "success": false,
  "message": "Something went wrong"
}
