# Тестування працездатності системи

## Запуск сервера

![](media/start.png)

## User

### POST /users

![](media/users/post/post.png)

#### InvalidBodyException

![](media/users/post/postInvalidBody.png)

### GET /users

![](media/users/get/getAll.png)

### GET /users/:id

![](media/users/get/get.png)

#### InvalidEntityIdException

![](media/users/get/getException.png)

### PATCH /users/:id

![](media/users/patch/patch.png)

#### InvalidEntityIdException

![](media/users/patch/patchException.png)

#### InvalidBodyException

![](media/users/patch/patchInvalidBody.png)

### DELETE /users/:id

![](media/users/delete/delete.png)

#### InvalidEntityIdException

![](media/users/delete/deleteException.png)

## ProjectMember

### POST /projectMember

![](media/projectMembers/post/post.png)

#### AlreadyInProjectException

![](media/projectMembers/post/postAllreadyInProject.png)

#### InvalidEntityIdException

![](media/projectMembers/post/postInvalidEntityIdException.png)

#### InvalidBodyException

![](media/projectMembers/post/postInvalidBody.png)

### GET /projectMember

![](media/projectMembers/get/getAll.png)

### GET /projectMember/:id

![](media/projectMembers/get/get.png)

#### InvalidEntityIdException

![](media/projectMembers/get/getException.png)

### PATCH /projectMember/:id

![](media/projectMembers/patch/patch.png)

#### InvalidEntityIdException

![](media/projectMembers/patch/patchException.png)

#### InvalidBodyException

![](media/projectMembers/patch/patchInvalidBody.png)

### DELETE /projectMember/:id

![](media/projectMembers/delete/delete.png)

#### InvalidEntityIdException

![](media/projectMembers/delete/deleteException.png)
