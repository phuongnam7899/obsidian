# SEAB Candidate Portal (CP) and Examination Personnel Portal (EPP)

CP is an easy-to-use customer centric web portal for local and foreign students (including private
students) to register for placement tests, exams, retrieve results and perform payment. EPP is a web
portal that improves the operational efficiency in examination administration for SEAB, schools and
teaching staff.

Both CP and EPP web applications are implemented using [ReactJS](https://reactjs.org/)
and [Material-UI](https://material-ui.com/). Core and supporting microservices are implemented
using [Spring Boot](https://spring.io/projects/spring-boot)
and [Spring Cloud](https://spring.io/projects/spring-cloud).

> Please read [microservice architectures](https://spring.io/microservices) if you are not sure about it and [microservices development with Spring Boot](https://spring.io/quickstart).

**Prerequisites:** [Java 11](https://adoptopenjdk.net/installation.html)
and [NodeJS 14](https://nodejs.org/en/).

## Table of Contents

* [Development](#development)
* [License](#license)

[[SEAB CP and EPP Setup Checklist]]

## Development

### Installing OpenJDK 11 (LTS)
- [ ] Installing OpenJDK 11 (LTS)

Go to [AdoptOpenJDK](https://adoptopenjdk.net/installation.html) website. Select
the `OpenJDK 11 (LTS)`
version, `HotSpot/OpenJ9` JVM and `Windows x64/x86 jdk binary` platform. Click
the `Windows x86/x64 jdk` link to download the binary and follow the instructions from the page to
setup.

### Installing IntelliJ IDEA

Got to [JetBrains](https://www.jetbrains.com/idea/download/#section=windows) website. Download
the `Community` version of IntelliJ IDEA and install it.

### Installing and Configuring Google Java Format Plugin

Got to [google-code-format](https://github.com/google/google-java-format) website. Follow the
instructions from the page to install the plugin in Intellij editor and configure accordingly.

### Installing Sonarlint Plugin

SonarLint is required for java code checking. Go to Intellij File > Settings > Plugins, search for "
SonarLint" and click to install.

### Installing Save Action Plugin

Save Action plugin is required for auto code formatting and import optimization. Go to Intellij
File > Settings >
Plugins, search for "Save Action" and click to install. Go to File > Settings >
Other Settings > Save Action. Under general, check "Active save action on save". Under Formatting
Actions, check "
Optimize import" and "Reformat file".

### Configuring Upsource

Go to your IDE's settings and select the `Plugins` category. Click the `Marketplace` tab, search for
the `Upsource Integration` plugin, and click the `Install` button.

After installing the plugin, restart your IDE. Go to your IDE's settings and select the `Tools`
category. Click on `Upsource` and then `Connection` setting.
Use [https://seab-upsource.mailme.sg/](https://seab-upsource.mailme.sg/) for
`Server URL` and click on `Test Connection` button. Sign in Upsource using your credentials and
click `Accept` button to authorize connection.

### Setup for React Projects (web-* folders)

#### 1. Install Node JS and NPM on your developing machine:

- Install the latest LTS version here: https://nodejs.org/en/. Note that NPM comes with Node JS
  installation.
- Highly recommend to
  use [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)
  to manage Node JS versioning on Windows because updating Node JS is not a straightforward task on
  Windows.

#### 2. IMPORTANT : make sure you have followed step 1 to have the latest Node LTS ( the project is using v14.16.0 LTS as of now) before running the following command (in React Project folder) to install external dependencies

```
npm ci
```

#### 3. Setup IntelliJ IDEA to "auto format on save" using Prettier Plugin (Intellij Ultimate)

1. Open IntelliJ IDEA `Settings/Preferences` dialog and select `Plugins`.
2. Search for a plugin called `Prettier` and select `Install`. Remember to click `Apply` after
   installing the plugin.

**You should pause here and revisit back to execute step 3-4 below after you npm ci all your web-*
react project (e.g. web-candidate and web-library).

3. Follow steps 2 to 4 [here](https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_install)
   to configure `Prettier` with IntelliJ Idea.
    - Normally, the fields in the guide are auto-populated.
    - For prettier package list, just make sure all you web-* project have the same version of
      prettier from the dropdown selection. Then select either one.
4. In the same dialogue box from the previous step, enable `On Save` so that files are auto
   formatted on save.

#### 4. Setup IntelliJ IDEA to provide real time ESLint feedbacks (Recommended) (Intellij Ultimate)

Open the IntelliJ IDEA `Settings/Preferences` dialog, go
to `Languages and Frameworks | JavaScript | Code Quality Tools | ESLint`, and select
the `Automatic ESLint configuration` option.

Recommended to leave the `enable eslint--fix on save` option untick for your benefit.

If real time feedbacks are too taxing on your local machine i.e. causing severe lag, you could
run `npm run lint` to list out all the ESLint errors in the project. Run it in IntelliJ IDEA
provided terminal for optimal experience.

#### 5. Follow the guides at each project's README for specific instructions

### Start Up Your Backend Services

#### What is Vagrant?

Vagrant is a command line utility for managing the lifecycle of VM.

#### Setup Vagrant

1. Go to [Vagrant download page](https://www.vagrantup.com/downloads) to download and install
   vagrant version `2.2.14`.
2. Go to [VirtualBox download page](https://www.virtualbox.org/wiki/Downloads) to download and
   install both virtualbox and virtualbox extension pack version `6.1.18`.

#### Start up Vagrant VM for development

1. Open up your terminal and navigate to the project's root directory
2. Type in the command `vagrant up develop` to spin up and provision the VM for :
    - MySQL Community v8.0
    - Redis v6.0.9
    - ElasticSearch v7.11.1
    - JSON Server
    - MailDev
    - localstack(Mock AWS) s3 and sqs services
3. Wait for VM to finish start up and provisioning
4. SSH into the VM (Refer to Vagrant VM Names and Vagrant Command section for SSH command)
5. Run `systemctl status <service name>`to check your services are starting up fine.
6. Run `docker container list` to check if localstack is running

*Note: If you encounter error trying to ssh into the provisioned VM then set your system environment
variable set `VAGRANT_PREFER_SYSTEM_BIN` to `0` and try again.*

#### Configure Localstack Script

1. SSH into vagrant using `vagrant ssh`
2. Edit `config.py` by using `vim /home/vagrant/.local/lib/python2.7/site-packages/localstack_client/config.py`
3. Replace `from urllib.parse import urlparse` with following content

```shell
try:
    from urllib.parse import urlparse
except ImportError:
     from urlparse import urlparse
```

#### Seeding your database

1. SSH into vagrant using `vagrant ssh`
2. Ensure MySQL is running by running `systemctl status mysqld`
3. Navigate to `/vagrant/misc/ddl`
4. Run `./DDL_FILE_EXEC.sh`

#### Seeding Localstack

1. SSH into vagrant using `vagrant ssh`
2. Ensure localstack is running by running `docker container list`
3. Navigate to `/vagrant/misc/localstack`
4. Run `./init-localstack.sh`

#### Start up Vagrant VM for Integration Test (and it is optional and can setup in future)

1. Open up your terminal and navigate to the project's root directory
2. Type in the command `vagrant up test` to spin up and provision the VM for :
    - Docker
3. Wait for VM to finish start up and provisioning
4. SSH into the VM (Refer to Vagrant VM Names and Vagrant Command section for SSH command)
5. Run `docker container list`

### Configure Maven (to enable downloading dependencies from HTTP sources)

1. Navigate to `C:\Users\<current user>\.m2`
2. Create `settings.xml` file and paste following content

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 http://maven.apache.org/xsd/settings-1.2.0.xsd">
  <mirrors>
    <mirror>
      <id>maven-default-http-blocker</id>
      <mirrorOf>dummy</mirrorOf>
      <name>Dummy mirror to override default blocking mirror that blocks http</name>
      <url>http://0.0.0.0/</url>
    </mirror>
  </mirrors>
</settings>
```

#### Start up API Services

##### Intellij Community

1. You must start up your service-gateway first since it is going to serve as a single entrypoint
   for calling all services. Refer
   to [Application Design/Design/Cloud Gateway](https://confluence.ship.gov.sg/display/SEAB/2.2+Cloud+Gateway)
   for the application design.

   Navigate to service-gateway folder and run `mvn spring-boot: run`

2. Open a new terminal and cd into other services and run `mvn spring-boot: run`.
3. For services that need to locate another service to talk to, make sure to up your registry
   service. For more information of the architecture design, pls refer
   to [Application Design/Design/Supporting Services](https://confluence.ship.gov.sg/display/SEAB/2.3+Supporting+Services)

##### Intellij Ultimate

1. Add the service-candidate into Intellij Services Spring boot
2. Run the services

#### Start up Mail Service

We will be using [mailDev](https://github.com/maildev/maildev) as our test server for email. The
service comes with its own UI as well. Our email service will eventually be replaced by Amazon SNS
service when it gets ready.

1. Make sure the email port in the application.yml of the required service is correctly configured
   to point to the mail server.
   (An example can be seen in `service-user/src/main/resources/application.yml`)

2. Browse to [http://172.31.22.174:1080/](https://github.com/maildev/maildev) for the mail webapp.

*******

### Configuring Backend Services

#### Ansible Playbook Configuration

While Vagrant will help to manage the VM the actual provisioning of the dependencies will be done by
Ansible. During VM provisioning, vagrant will run a different set of Ansible playbook(s)
depending on the currently configured mode. However, all configurations will be found
in `./misc/ansible/config.yml`.

The configuration file is in a yml format. split up into the 3 category which will correspond to the
components.

Configurations :

- Mysql
    - version
        - MySQL version without the '.' eg Version 8.0 -> 80
    - newPassword
        - New password for root user
    - dbUsername
        - Username for newly created user
    - dbUserPassword
        - New password for the newly created db user
- Redis
    - version
        - Redis version
    - port
        - Port to run Redis on
    - databases
        - Set the number of databases
    - logDir
        - Logging directory for Redis
    - logFile
        - Name of the log file for Redis
    - workingDir
        - Working directory for Redis
- ElasticSearch
    - version
        - ElasticSearch version
    - dataDir
        - Data directory for ElasticSearch
    - logDir
        - Logging directory for ElasticSearch

#### Vagrant VM Info

VM IP - 172.31.22.174

ElasticSearch Port = 9200

MySQL Port = 3306

localstack Port = 4566

Names of services running in VM:

`mysqld` - MySQL

`redis` - Redis

`elasticsearch` - ElasticSearch

`rc-local.service` - JSON Server and MailDev

To connect to the db from host please use the value :

username = `ufinity`

password = value of mysql.newPassword configured in config.yml

#### Localstack details

s3 buckets: - s3://clean, s3://dirty, s3://quarantine, s3://template

sqs queue:

    clean queue url - http://172.31.22.174:4566/000000000000/document-service-clean-queue
    quarantine queue url - http://172.31.22.174:4566/000000000000/document-service-quarantine-queue

#### Common ElasticSearch api

Create index API - `curl -X "PUT" 172.31.22.174:9200/<YOUR INDEX NAME>`

Delete specific index API - `curl -X "DELETE" 172.31.22.174:9200/<YOUR INDEX NAME>`

Delete all index API - `curl -X "DELETE" 172.31.22.174:9200/_all`

Get index API - `curl 172.31.22.174:9200/<YOUR INDEX NAME>`

Get search index API - `curl 172.31.22.174:9200/<YOUR INDEX NAME>/_search/?pretty`

*Note: the default number of records returned is 10 if you want to customise the number of returned
items append `&size=<number of records>` to the above command*

For other API documentation please refer
to [ElasticSearch API documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/rest-apis.html)

#### Vagrant Commands

`vagrant up` - Create/Start all VM specified in Vagrantfile.

`vagrant halt` - Stops all VM specified in Vagrantfile.

`vagrant ssh` - SSH into VM specified in Vagrantfile.

`vagrant destroy` - Destroys all VM specified in Vagrantfile.

#### Common commands after successful SSH into VM

`logout` - type this command to end the SSH session.

`systemctl status <service name>` - To check the status of a service given a service name

`sudo su` - Change to root user

`awslocal` - use this to access the mock aws services

For further vagrant documentation refer to: [Vagrant Documentation](https://www.vagrantup.com/docs)

#### Start up Mock SingPass Server

We will be using [mock singpass](https://github.com/opengovsg/mockpass/) as our test server for
SingPass authentication flow. The service comes with its own UI as well. Our SingPass authentication
flow will eventually be replaced by SingPass service when it gets ready for production.

1. Make sure to create .env file in the root of the project and copy and paste the below properties
   correctly. SINGPASS_ASSERT_ENDPOINT=http://localhost:5000/singpass/assert
   CORPPASS_ASSERT_ENDPOINT=http://localhost:5000/corppass/assert
   MOCKPASS_PORT=5156 MOCKPASS_NRIC=S8979373D MOCKPASS_UEN=123456789A SHOW_LOGIN_PAGE=true
   SIGN_ASSERTION=false ENCRYPT_ASSERTION=false SIGN_RESPONSE=false
   RESOLVE_ARTIFACT_REQUEST_SIGNED=false ENCRYPT_MYINFO=false

2. Remove/comment out the following code snippet from oidc.js, in order to skip encryption.
   `const encryptionKey = await jose.JWK.asKey(serviceProvider.cert, 'pem')
   const idToken = await jose.JWE.createEncrypt(
   { format: 'compact', fields: { cty: 'JWT' } }, encryptionKey,
   )
   .update(signedIdToken)
   .final()`

3. Change id_token value in res.send, to signedIdToken.

4. Execute command, `npm install` in order to install all relevant dependencies.

5. Finally, execute command `npm run start` to run mock singpass server.

*******

#### Set up Virtual Box on another device (LAN only) for Mac M1 chip

#### Welcome to updating, enhancing and optimization this part.

#### Need your ideas maybe from Networking specs, Cloud or Replacing Virtualbox by Docker.

As Virtualbox is not compatible on M1 chip (or Arm64 Architecture based CPU), normally for MacBook
User, another device for VM environment is needed.

* In the future, we may use Docker instead of Virtualbox or other solutions. Here is the instruction
  for device pair setting up.

1. Prepare a device(called **D**) with Virtualbox and Vagrant installed.
2. Connect **D** in a network with IPv4 address **_192.168.A_**.B.
3. Connect the MacBook in the same network(same router) with IPv4 address _**192.168.A**_.C.
4. Create a folder named "cpep" in **D**, from cpep repo, find the file <Vagrantfile> and
   folder <misc>
5. Copy <Vagrantfile> and <misc> to the folder <cpep> in D.
6. Open your <Vagrantfile> on D:
   (1). Change the ip address of the part:
   'VM_PRIVATE_IP_DEV = ENV['PRIVATE_IP_DEV'] || "172.31.22.174"'
   'VM_PRIVATE_IP_TEST = ENV['VM_PRIVATE_IP_TEST'] || "172.31.22.175"'
   to 192.168.A.D and 192.168.A.E where D and E is from 1 to 255 and not used in LAN.
   (2). Change the value of 'private_network' in:
   'develop_config.vm.network "private_network", ip: VM_PRIVATE_IP_DEV'
   'test_config.vm.network "private_network", ip: VM_PRIVATE_IP_TEST' to 'public_network'
7. Save and exit, open terminal at <cpep> folder and input command 'vagrant up'.
    * You may require select network for bridging. Select 1;
8. Once Vagrant is up, use command 'vagrant ssh' to access the vm ssh:
   (1). use command 'sudo yum update all';
   (2). use command 'sudo nano /etc/ssh/sshd_config' and make the following changes:
    - uncomment or set 'PermitRootLogin yes'
    - uncomment or set 'PubkeyAuthentication yes'
    - uncomment or set 'PasswordAuthentication yes'
    - uncomment or set 'PermitEmptyPasswords Yes'
    - uncomment or set 'ChallengeResponseAuthentication yes'
    - confirm 'GSSAPIAuthentication yes'
    - confirm 'GSSAPICleanupCredentials no'
    - confirm 'UsePAM yes'
    - ctrl + x -> y -> enter to save the changes.
      (3). use command 'sudo systemctl restart sshd'
      (4). use command 'sudo passwd vagrant' to set your [ssh password]
        * you may also want to set the root password using 'sudo passwd'
9. 'exit' the vagrant. Use 'ssh vagrant@192.168.A.D' and the [ssh password], equals to "vagrant ssh"
   .
10. Then your VM part is done.
11. On Mac, use 'ssh vagrant@192.168.A.D' for access vagrant ssh.
12. On Mac, use 'sftp vagrant@192.168.A.D' for access vagrant sftp.
13. In your workspace on Mac, globally replace all '172.31.22.174' to '192.168.A.D'
14. And globally replace all '172.31.22.175' to '192.168.A.E'. (Negatively effect on SourceTree)
15. Update your misc folder for VM:
    (1) ssh to vagrant 'cd /vagrant' -> 'rm -r misc' * misc is in your Vagrant, also the one on D.
    (2) sfpt to vagrant 'cd /vagrant' -> 'put -r misc' * misc is in your workspace on Mac
16. Running DDL, initialise localstack and query redis or aws should be done in vagrant ssh, which
    is the same as usual.

TIPS:

- If there is permission issue when executing ddls, can try 'sudo sh DDL_XXX.sh'
- Before commit your code, can revert the IP address back, to prevent miss any file for commitment.
-

****

## License

Proprietary.