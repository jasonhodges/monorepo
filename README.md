# Monorepo
## BRANCH: 01-new-workspace
**Step 1**: Create a new Angular CLI workspace by running the following command:

`ng new monorepo --commit=false --createApplication=false --directory=monorepo --skipGit=true --skipInstall=true --style=scss`

## BRANCH: 02-generate-application
**Step 2**: In this step, we create all the applications for the East Division football team of the Big Ten Conference.

Generate the new Angular Applications by running the following commands:

`ng generate application IndianaUniversity --prefix=iu --routing=true --skipInstall=true --style=scss`\
`ng generate application MichiganStateUniversity --prefix=msu --routing=true --skipInstall=true --style=scss`\
`ng generate application OhioStateUniversity --prefix=osu --routing=true --skipInstall=true --style=scss`\
`ng generate application UniversityOfMichigan --prefix=mich --routing=true --skipInstall=true --style=scss`\
`ng generate application MarylandUniversity --prefix=md --routing=true --skipInstall=true --style=scss`\
`ng generate application PennStateUniversity --prefix=psu --routing=true --skipInstall=true --style=scss`\
`ng generate application RutgersUniversity --prefix=rutg --routing=true --skipInstall=true --style=scss`

We will modify the package.json file to add ability to launch, build or test all applications in a single command utilizing a package called 'npm-run-all'.

Check the package.json for the additional run scripts.

## BRANCH: 03-generate-lib-header
**Step 3:** A header library component is created in this step. Each of the applications within the project will use this header.\
The lib-header library component was created using the following command:\
`ng generate library lib-header --prefix=ui`

The package.json file has been modified to allow for building the newly added library. Additional commands have been introduced to allowing building the library and watch for changes. Building the library will place it in the dist folder of the monorepo. For local development, the applications can import the library from this location. Angular CLI modified the workspaces tsconfig.json file to include paths to the library within the dist directory. 

The lib-header ui component utilizes its own service to make an api call in order to get information about each team. Config is included in proxy.conf.json and supplied to each application within angular.json under serve > options > proxyConfig. This allows each application to properly call the api via the header while being served for local development.

A shared directory has been added under the projects directory. Within this directory are folders for images, models, and styles as well as a material.module for bringing in Angular Material components (for demo style). 

Each application is using the lib-header. Within each application module file, a set of values is being passed to the LibHeaderModule via .forRoot. This is what customizes the header for each application. The values are passed to the lib-header and then lib-header uses the values to filter the response from the api call. 
