var mongoose = require('mongoose')
module.exports = {
    home: (req, res) => {
        res.redirect('/list')
    },

    List: async (req, res) => {



        var allRecord = await NewCrudeCollection.find({}).sort({ _id: -1 })
        res.render('index.ejs', {
            allRecord
        })
       
    },
    Add: async (req, res) => {
        var allDesignation = await DesignationData.find({}).sort({_id:-1})
       

        res.render('Add.ejs', {
            req, allDesignation
        })
    },




    AddRecord: async (req, res) => {
     

        var Email = req.body.Email
        
        var EmailCount = await NewCrudeCollection.count({ "Email": Email })
        console.log(EmailCount)

        if (EmailCount == 0) {
            var alldata = new NewCrudeCollection(
                {
                    Name: req.body.Name,
                    Email: req.body.Email,
                    Salary: req.body.Salary,
                    Designation: req.body.Designation,
                    IsActive: true,
                    IsDelete: false,
                    LastActivityOn: Date.now()
                }


            )
            var result = await alldata.save()
            

            res.redirect('/')
        }
        else {
            res.send('Email Already Exists!')
        }





    },



    Edit: async (req, res) => {
        var id = req.params._id
        var EditRecord = await NewCrudeCollection.findOne({ _id: mongoose.Types.ObjectId(id) })
        var allDesignation = await DesignationData.find({}).sort({_id:-1})
        res.render('edit.ejs', {
            EditRecord,
            allDesignation,
            id

        })
       



    },


    UpdateRecord: async (req, res) => {
        var UpdateRecord = await NewCrudeCollection.updateOne({ _id: mongoose.Types.ObjectId(req.body._id) }, {
            $set: {
                Name: req.body.Name,
                Email: req.body.Email,
                Salary: req.body.Salary,
                Designation: req.body.Designation,
                IsActive: true,
                IsDelete: false,
                LastActivityOn: Date.now()
            }
        })
        console.log(UpdateRecord)
        res.redirect('/')
    },


    Delete: async (req, res) => {
        var Delete = await NewCrudeCollection.remove({ _id: mongoose.Types.ObjectId(req.params._id) })
        res.redirect('/')
    },

    
    AddDesignation: (req, res) => {
        res.render('AddDesignation.ejs', {
            req
        })

    },
    PostAddDesignation: async (req, res) => {
        



        var Designationalldata = new DesignationData(
            {

                Designation: req.body.Designation,
                IsActive: true,
                IsDelete: false,
                LastActivityOn: Date.now()
            }


        )
        var result = await Designationalldata.save()
        console.log(result)
        res.redirect('/')
    }

}