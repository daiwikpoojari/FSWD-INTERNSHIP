> Assignment of 30th March.

# MongoDB Data Model: Blogging Platform

## Schema Design
This project outlines a hybrid MongoDB schema designed for a blogging platform.

### Design Decisions
- **Embedding:** I embedded the `username` inside the `posts` collection to optimize read performance for the blog feed.
- **Referencing:** I used a reference for `comments` to ensure the post documents stay within the 16MB limit as the conversation grows.

### How to Run
1. Install MongoDB Community Edition.
2. Use **MongoDB Compass** to create the `BloggingPlatform` database.
3. Create indexes on `slug` and `tags` for the `posts` collection.