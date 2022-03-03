const Generator=require('yeoman-generator')

module.exports=class extends Generator{
    

    constructor(args,opts){
        super(args,opts)
        this.answer={

        }
    }

    prompting(){
        return this.prompt([{
            type:'input',
            name:'name',
            message:'your project name',
            default:this.appname
        },
        {
            type:'confirm',
            name:'cool',
            message:'Would you like to enable the Coll feature?'
        }]).then(answer=>{
            this.log('appname',answer.name)
            this.log('cool feature',answer.cool)
            // save to write
            this.answer=answer
        })
    }

    writing(){
        
        const templates=[
            "public/index.html",
            "public/favicon.ico",
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/App.vue',
            '.gitignore',
            'babel.config.js',
            'package.json',
            "README.md"
        ]
        templates.forEach(template=>{
            this.renderTemplate(template,this.destinationPath(template),this.answer)
        })
    }
}