CREATE TABLE IF NOT EXISTS projects(
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name text NOT NULL CHECK (name <> ''),
	priority integer NOT NULL,
	description text,
	deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS task_projects(
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name text NOT NULL CHECK (name <> ''),
	done BOOLEAN,
	projectid INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name, priority,description,deliverydate)
VALUES('Make a Web App',1,'Using Javascript','2019-07-07');

INSERT INTO projects(name, priority,description,deliverydate)
VALUES('Make an App',1,'Using Dart','2019-08-07');

INSERT INTO projects(name, priority,description,deliverydate)
VALUES('Make a Desktop App',2,'Using C++','2019-09-07');

-- INSERT TASK DATA
INSERT INTO task_project(name,done,projectId)
VALUES('Download VueJs',false,1);

INSERT INTO task_project(name,done,projectId)
VALUES('Create UI Web',false,1);

INSERT INTO task_project(name,done,projectId)
VALUES('Download Flutter',false,2);

INSERT INTO task_project(name,done,projectId)
VALUES('Design UI',false,2);