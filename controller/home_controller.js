
const Task = require('../models/task');
// module.exports.home = function(req, res){
//     // console.log(req.cookies);
//     // res.cookie('user_id',25);
//     return res.render('home', {
//         title: "Home"
//     });
// }

module.exports.home = function(req,res){
    Task.find({}, function(err, task){
        if(err){
            console.log('Error in fetching tasks from db');
            return;
        }
        return res.render('home', {
            title: "Home",
            task: task
        });
    });

}

// creating Tasks
module.exports.create = function(req, res){
     console.log("Creating Task");
      console.log(res.body)
      Task.create({
          description: req.body.description,
          category: req.body.category,
          date: req.body.date
          }, function(err, newtask){
          if(err){console.log('error in creating task', err); return;}
          
  
          //console.log(newtask);
          return res.redirect('back');
  
      });
    // return res.send('Ujawal Tiwari')
  };

  // deleting Tasks
module.exports.delete = function(req, res){
    // get the id from query
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for(let i=0; i < count ; i++){
        
        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function(err){
        if(err){
            console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back'); 
};