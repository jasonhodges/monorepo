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
