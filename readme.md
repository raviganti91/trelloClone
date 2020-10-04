
# React Drag n Drop Tutorial 

Create a Trello Dashboard clone in React.js. The code needed for this is super easy thanks to react-dnd!

## Installation

Use the cmd line to install dependencies. 

```
npm install
```

## Usage

```
npm run build
npm run dev
```

## Contributing

Add your commit notes to commit.log
When committing use

```
git commit -F commmit.log
```

http://trello/api/



# GET : api/getTasks/

Sample Response: 
 ```
 [
	 {
	    id: 1,
	    icon: "https://samplecdn.com/asghd66567",
	    status: "Resources",
	    title: "Human Interest Form",
	    content: "Fill out human interest distribution form"
	}, 
	{
	    id: 2,
	    icon: "https://samplecdn.com/asghd66566",
	    status: "Resources",
	    title: "Human Interest Form",
	    content: "Fill out human interest distribution form"
	}...
]
```

# GET : api/getTasks/{task.id = 1}

```
Sample Response: 
 {
    id: 1,
    icon: "https://samplecdn.com/asghd66557",
    status: "Resources",
    title: "Human Interest Form",
    content: "Fill out human interest distribution form"
}
```

# POST : api/createTask/

```
Sample body:
//Id will be auto generated.
{
   icon: "https://samplecdn.com/asghd611111",
   status: "Resources",
   title: "Human Interest Form",
   content: "Fill out human interest distribution form" 
}
```

# PUT : api/setTasks/{task.id = 1}
```
Sample body:
{
   icon: "https://samplecdn.com/asghd665666786",
   status: "Race course",
   title: "Human Interest Form",
   content: "Fill out human interest distribution form" 
}
```
# DEL : api/delTasks/{task.id = 1}
```
Sample Response:{
	statusCode: 200
}
```

----------------------------------------------------------------------
# Database tables schema

## Task 
```
Id   : varchar (PK)
icon : varchar (src path)
title : varchar
description : varchar
status : int
userId : int (FK)
```



## Status

```
statusName : varchar; (PK)
statusId : int (FK)
```

## User 
```
Id : int (PK);
Name : varchar;
email: varchar;
type: varchar;
```