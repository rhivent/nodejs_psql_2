import Project from '../models/Project';

export async function getProjects(req,res){
	try{
		const projects = await Project.findAll();
		res.json({
			data:projects
		});
	}catch(e){
		console.log(e);
	}
}

export async function getOneProject(req,res){
	try{
		const {id} = req.params;
		const project = await Project.findOne({
			where:{
				id
			}
		});
		// res.json({
		// 	data:project
		// });
		res.json(project);
	}catch(e){
		console.log(e);
	}
}

export async function createProject(req,res){
	const { name,priority,description,deliverydate } = req.body;
	// console.log(req.body);
	try{
		let newProject = await Project.create({
			name,
			priority,
			description,
			deliverydate
		},{
			fields:['name','priority','description','deliverydate']
		});
		if (newProject){
			return res.json({
				message:'Project crated successfully',
				data: newProject
			});
		}
	}catch(e){
		console.log(e);
		res.status(500).json({
			message:'Something goes wrong',
			data:{}
		})
	}
	
}

export async function editProject(req,res){
	const { id } = req.params;
	const { name,priority,description,deliverydate } = req.body;
	
	try{
		const oldProject = await Project.findAll({
			attributes:['id','name','priority','description','deliverydate'],
			where:{
				id
			}
		});
		if(oldProject.length > 0){
			oldProject.forEach(async project => {
				await project.update({
					name,
					priority,
					description,
					deliverydate
				})
			})
		}

		return res.json({
			message: "Project Updated Successfully !",
			data:oldProject
		});
	}catch(e){
		console.log(e);
		res.status(500).json({
			message:'Something goes wrong',
			data:{}
		})
	}
	
}

export async function deleteProject(req,res){
	try{
		const {id} = req.params;
		const deleteRowCount = await Project.destroy({
			where:{
				id
			}
		});

		res.json({
			message:'Project Delete successfully',
			count:deleteRowCount
		});	

	}catch(e){
		console.log(e);
	}
}