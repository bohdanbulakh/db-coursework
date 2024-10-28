# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення початкового наповнення бази даних

_migrate.sql_
```sql
-- CreateTable
CREATE TABLE `project` (
    `id` VARCHAR(191) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `project_member` (
    `id` VARCHAR(191) NOT NULL,
    `project_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `task` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `deadline` DATETIME(0) NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `task_comment` (
    `id` VARCHAR(191) NOT NULL,
    `text` MEDIUMTEXT NOT NULL,
    `task_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(320) NOT NULL,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `avatar` MEDIUMTEXT NOT NULL,
    `blocked` BIT(1) NOT NULL DEFAULT b'0',

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `assignment` (
    `id` VARCHAR(191) NOT NULL,
    `task_id` INTEGER NOT NULL,
    `project_member_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
    );

-- CreateTable
CREATE TABLE `suport_request` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `topic` VARCHAR(255) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `support_request_answer` (
    `id` VARCHAR(191) NOT NULL,
    `feedback` MEDIUMTEXT NOT NULL,
    `support_request_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `connect_to_project_request` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` INTEGER NOT NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `role` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `project_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `project_member_role` (
   `id` VARCHAR(191) NOT NULL,
   `role_id` INTEGER NOT NULL,
   `project_member_id` INTEGER NOT NULL,

   PRIMARY KEY (`id`)
);

-- CreateTable
CREATE TABLE `grant` (
    `id` VARCHAR(191) NOT NULL,
    `permission` VARCHAR(255) NOT NULL,
    `role_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
);

-- AddForeignKey
ALTER TABLE `project_member`
    ADD CONSTRAINT `project_member_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member`
    ADD CONSTRAINT `project_member_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task`
    ADD CONSTRAINT `task_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `task_comment`
    ADD CONSTRAINT `task_comment_task_id_fkey`
    FOREIGN KEY (`task_id`)
    REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignment`
    ADD CONSTRAINT `assignment_task_id_fkey`
    FOREIGN KEY (`task_id`)
    REFERENCES `task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `assignment`
    ADD CONSTRAINT `assignment_project_member_id_fkey`
    FOREIGN KEY (`project_member_id`)
    REFERENCES `project_member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `suport_request`
    ADD CONSTRAINT `suport_request_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `support_request_answer`
    ADD CONSTRAINT `support_request_answer_support_request_id_fkey`
    FOREIGN KEY (`support_request_id`)
    REFERENCES `suport_request`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `connect_to_project_request`
    ADD CONSTRAINT `connect_to_project_request_user_id_fkey`
    FOREIGN KEY (`user_id`)
    REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `connect_to_project_request`
    ADD CONSTRAINT `connect_to_project_request_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role`
    ADD CONSTRAINT `role_project_id_fkey`
    FOREIGN KEY (`project_id`)
    REFERENCES `project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member_role`
    ADD CONSTRAINT `project_member_role_role_id_fkey`
    FOREIGN KEY (`role_id`)
    REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `project_member_role`
    ADD CONSTRAINT `project_member_role_project_member_id_fkey`
    FOREIGN KEY (`project_member_id`)
    REFERENCES `project_member`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `grant`
    ADD CONSTRAINT `grant_role_id_fkey`
    FOREIGN KEY (`role_id`)
    REFERENCES `role`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
```

_seed.sql_

```sql
BEGIN;

INSERT INTO `user` VALUES
    ('01aac9a4-9fa0-4259-9cb7-96ae04493c00','Alfreda.Kovacek','2IeUPM2PuuxTSWr','Harry79@gmail.com','Uriel','Beier','https://avatars.githubusercontent.com/u/84658049',_binary '\0'),
    ('ac271f82-76f6-4cde-be0b-5d22c05ef026','Bertha.Bogisich69','WtxUZUx7zlckhh_','Ezekiel_Pacocha25@yahoo.com','Kiley','Marvin','https://avatars.githubusercontent.com/u/92353484',_binary '\0'),
    ('e2217349-7e03-46bd-a504-f1e2067cae6c','Eleonore.Kassulke40','JWalSbqVHoE1Ieg','Ceasar60@gmail.com','Paris','Leannon','https://avatars.githubusercontent.com/u/416693',_binary '\0'),
    ('ed8b1607-6901-45f7-837c-51a5d838559c','Carolyn.Hagenes24','fIfystAB8TkB434','Cayla.Oberbrunner52@hotmail.com','Eloy','Stroman','https://avatars.githubusercontent.com/u/7719973',_binary '\0'),
    ('ff3ea8d2-e289-4e51-a583-70e632b96543','Eloy.Mills14','0al8wG4h2W57FDW','Ofelia_Gleichner@gmail.com','Constance','Bode','https://avatars.githubusercontent.com/u/4484700',_binary '\0');


INSERT INTO `project` VALUES
    ('37385665-6efc-4880-8769-bae6df1fe3fc','active','custom','Amiculum sto culpa utrimque.'),
    ('ebe00229-6821-45bc-8046-9c3706592dd4','active','hepatitis','Crinis arcus agnitio ater defleo votum aestivus cura.');


INSERT INTO `connect_to_project_request` VALUES
    ('9543a4f0-8b16-456f-b1a5-221ab9489ea4','ff3ea8d2-e289-4e51-a583-70e632b96543','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `project_member` VALUES
    ('0917dc05-f777-44e0-8c2e-699f69afe37e','37385665-6efc-4880-8769-bae6df1fe3fc','01aac9a4-9fa0-4259-9cb7-96ae04493c00'),
    ('0adcac73-075e-4be9-881c-3663d365642c','ebe00229-6821-45bc-8046-9c3706592dd4','e2217349-7e03-46bd-a504-f1e2067cae6c'),
    ('5b81c65a-91a6-47bf-b8be-bac234bc3fde','ebe00229-6821-45bc-8046-9c3706592dd4','ed8b1607-6901-45f7-837c-51a5d838559c'),
    ('857761ed-8c62-4946-b24f-73aff9ff3c39','37385665-6efc-4880-8769-bae6df1fe3fc','ac271f82-76f6-4cde-be0b-5d22c05ef026');


INSERT INTO `task` VALUES
    ('617cd0ac-ea33-4d10-8422-6080a9149ff0','vitae','Curriculum tabula subseco absum. Cervus trepide quaerat. Aeger cunctatio rerum arbustum.','todo','2024-08-14 02:23:34','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4','cursus','Desidero considero cruciamentum coniuratio magnam vobis. Crinis varietas unde curvo apud aperio. Ter audentia tristis via adflicto.','todo','2024-07-25 03:43:09','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('9df91dfc-8798-45fc-a79c-68ced190f6e1','canis','Certe cito viscus nesciunt casus dolores supellex cibus. Nobis averto depono validus. Corrumpo maxime chirographum conqueror trucido pel.','todo','2025-10-26 07:17:02','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','cunabula','Talus pax sollicito summisse advoco claro adeptio. Vivo tergiversatio est qui tutamen. Vulnus conturbo cupio.','todo','2025-02-08 01:29:55','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `task_comment` VALUES
    ('038147de-4fef-4b24-be8f-1a66c965cd83','Tempore vulticulus vis debitis enim utique carbo quisquam. Ante absum ventosus. Defaeco aut aedificium articulus. Compello capitulus officia nulla sordeo. Succedo timor currus debitis velum. Enim commodo alveus culpa delectus demens sui subseco umerus praesentium. Repellat tardus amo bellum conduco thesaurus charisma aiunt.','9df91dfc-8798-45fc-a79c-68ced190f6e1','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('62750d0b-dfd8-4ba2-967d-7c723450508b','Amoveo clamo tamdiu accusantium usque tamquam tergum. Thalassinus termes tametsi. Alioqui magni spoliatio totus basium curiositas a. Thesaurus totus tego spectaculum sufficio argumentum. Templum qui aestus collum alo vorax crastinus conspergo defessus sint. Suspendo centum super addo cito. Tremo adstringo depopulo correptius.','617cd0ac-ea33-4d10-8422-6080a9149ff0','0adcac73-075e-4be9-881c-3663d365642c'),
    ('90d3dc3b-2ea3-41d3-9fd5-b357208ebc21','Angulus cometes apparatus comminor inflammatio ter comitatus vinculum. Vigor quasi amet. Suppellex eos uter sursum arca teres alius quisquam aeneus. Casso verecundia depulso ceno possimus. Dolores amiculum adulatio arceo desparatus vacuus cohors adsuesco. Amplus vitium totidem adopto creo denique cupressus. Crudelis tepidus vorago virgo strues quam tergeo.','9df91dfc-8798-45fc-a79c-68ced190f6e1','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('b7fe557e-d4f7-4bba-bbd4-f61c41663cbf','Ars delinquo ab. Statim vestigium aeger. Aegrotatio bellum torqueo creber accusantium velum. Deorsum cum auctus. Vis vilis vilis complectus certus conscendo armarium quas. Coaegresco cunctatio bellicus patior natus corroboro summopere cunctatio acerbitas vomer. Tristis vilitas peior.','b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','5b81c65a-91a6-47bf-b8be-bac234bc3fde');


INSERT INTO `assignment` VALUES
    ('24ba8ad9-b269-4bcf-94a4-1dc832e8b061','b1e683ac-d4e9-45c6-a920-6ff6edf88a8e','0adcac73-075e-4be9-881c-3663d365642c'),
    ('2a173791-18b7-42c5-a4be-c25671a53092','9df91dfc-8798-45fc-a79c-68ced190f6e1','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('4330d27b-1297-407f-a6e5-7efcea73c4e0','9df91dfc-8798-45fc-a79c-68ced190f6e1','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('c0597b8c-21af-412d-8fa9-90cf9c03e044','8a4cc33b-5ad9-4683-bfeb-1d66cbf4c6d4','5b81c65a-91a6-47bf-b8be-bac234bc3fde');

INSERT INTO `role` VALUES
    ('0ac0e86e-3178-42e4-b624-875afa7328ac','member','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('5aefca52-a8c7-4150-b72a-96c248758784','manager','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('9a108f4a-38ea-422c-8f51-3bbe9acc62ae','admin','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('a69443b7-c68c-4e0e-908f-d66170cdede7','member','37385665-6efc-4880-8769-bae6df1fe3fc'),
    ('abcf3f91-1bb3-429d-a816-d1b1d04a14b6','manager','ebe00229-6821-45bc-8046-9c3706592dd4'),
    ('e8bc20c7-c479-43cc-afe3-e67c4deff572','admin','ebe00229-6821-45bc-8046-9c3706592dd4');


INSERT INTO `grant` VALUES
    ('09adb965-1282-4e7b-bcc9-93e3db0ea6b0','read','a69443b7-c68c-4e0e-908f-d66170cdede7'),
    ('30c3e00c-4346-4c87-bae6-68c0129cbc71','create','9a108f4a-38ea-422c-8f51-3bbe9acc62ae'),
    ('ab005d0f-bc4a-49d9-bc62-d9aae977377a','delete','0ac0e86e-3178-42e4-b624-875afa7328ac'),
    ('b014f61d-c834-4c63-80f7-701decfedeb8','read','e8bc20c7-c479-43cc-afe3-e67c4deff572'),
    ('caae45a4-8328-463f-ade0-28c83ddc75cc','create','abcf3f91-1bb3-429d-a816-d1b1d04a14b6'),
    ('cd89a1a8-d581-4dc4-a314-1f0766618d22','delete','5aefca52-a8c7-4150-b72a-96c248758784');


INSERT INTO `project_member_role` VALUES
    ('369ec90f-2ff4-4279-a09b-b536cc9ead4d','a69443b7-c68c-4e0e-908f-d66170cdede7','5b81c65a-91a6-47bf-b8be-bac234bc3fde'),
    ('a07920d3-e3fc-496b-8492-cabff398936f','5aefca52-a8c7-4150-b72a-96c248758784','0adcac73-075e-4be9-881c-3663d365642c'),
    ('b7a74192-e1e7-4839-9a15-c01b6bea2d5a','0ac0e86e-3178-42e4-b624-875afa7328ac','857761ed-8c62-4946-b24f-73aff9ff3c39'),
    ('d9755074-2734-486c-a2a6-51aa2415ed6d','0ac0e86e-3178-42e4-b624-875afa7328ac','0917dc05-f777-44e0-8c2e-699f69afe37e'),
    ('e28fa866-d9cc-408e-aa29-fc6c1dc0f817','a69443b7-c68c-4e0e-908f-d66170cdede7','0adcac73-075e-4be9-881c-3663d365642c'),
    ('ef17e2ce-9c9b-47a8-badc-4231e7c5c51c','9a108f4a-38ea-422c-8f51-3bbe9acc62ae','0917dc05-f777-44e0-8c2e-699f69afe37e');


INSERT INTO `suport_request` VALUES
    ('4fbe4541-9235-4e80-a9c9-9fd1d3117267','ac271f82-76f6-4cde-be0b-5d22c05ef026','accelerator','Inventore vapulus beatus tertius sono cerno. Titulus alienus coaegresco velit cunctatio corrumpo. Ulterius amoveo vaco adfero cribro torrens.'),
    ('5deddba6-2073-494b-af56-9a14f3847888','ed8b1607-6901-45f7-837c-51a5d838559c','coil','Umbra vesica arbor turbo centum cubitum caput mollitia spero. Vel via delibero autem decimus denuo. Taedium aggero sumptus commodo usque tabella.'),
    ('dfbf873b-de0d-493f-87dc-4ef53ecfd7ce','01aac9a4-9fa0-4259-9cb7-96ae04493c00','stock','Exercitationem asper repellendus curo cursim. Subnecto aeger vae acidus beneficium. Vae aut quod.');


INSERT INTO `support_request_answer` VALUES
    ('e29bce8b-e012-4b78-a552-9b547a4d275b','Admitto fugit condico caritas exercitationem apud eligendi quo desipio caterva. Accendo aurum impedit. Quo verbera subnecto a deficio. Verbum textilis concedo viduo. Supellex cerno tollo aperiam amor vinum.','4fbe4541-9235-4e80-a9c9-9fd1d3117267'),
    ('eaef85fe-6d41-4ad3-a874-0df59cf9f697','Vulgaris claudeo depereo incidunt. Antiquus aeternus depopulo civis coerceo considero atqui exercitationem conculco sum. Annus aureus voro nisi tenetur. Vado decipio vinum viriliter veritatis adinventitias aspicio via nulla. Tamquam adduco tredecim sollers appello bardus.','dfbf873b-de0d-493f-87dc-4ef53ecfd7ce');


COMMIT;
```

## RESTfull сервіс для управління даними

### Схема бази даних Prisma ORM

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Project {
  id                       String                    @id @default(uuid())
  status                   String                    @db.VarChar(255)
  name                     String                    @db.VarChar(255)
  description              String                    @db.MediumText
  projectMembers           ProjectMember[]
  tasks                    Task[]
  connectToProjectRequests ConnectToProjectRequest[]
  roles                    Role[]

  @@map("project")
}

model ProjectMember {
  id                 String              @id @default(uuid())
  project            Project             @relation(fields: [projectId], references: [id])
  projectId          String              @map("project_id")
  user               User                @relation(fields: [userId], references: [id])
  userId             String              @map("user_id")
  assignments        Assignment[]
  projectMemberRoles ProjectMemberRole[]
  taskComments       TaskComment[]

  @@map("project_member")
}

model Task {
  id           String        @id @default(uuid())
  name         String        @db.VarChar(255)
  description  String        @db.MediumText
  status       String        @db.VarChar(255)
  deadline     DateTime?     @db.DateTime(0)
  project      Project       @relation(fields: [projectId], references: [id])
  projectId    String        @map("project_id")
  assignments  Assignment[]
  taskComments TaskComment[]

  @@map("task")
}

model TaskComment {
  id              String        @id @default(uuid())
  text            String        @db.MediumText
  task            Task          @relation(fields: [taskId], references: [id])
  taskId          String        @map("task_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("task_comment")
}

model User {
  id                       String                    @id @default(uuid())
  username                 String                    @db.VarChar(255)
  password                 String                    @db.VarChar(255)
  email                    String                    @db.VarChar(320)
  firstName                String                    @db.VarChar(255) @map("first_name")
  lastName                 String                    @db.VarChar(255) @map("last_name")
  avatar                   String?                   @db.MediumText
  blocked                  Boolean                   @default(dbgenerated("b'0'")) @db.Bit(1)
  projectMembers           ProjectMember[]
  supportRequests          SupportRequest[]
  connectToProjectRequests ConnectToProjectRequest[]

  @@map("user")
}

model Assignment {
  id              String        @id @default(uuid())
  task            Task          @relation(fields: [taskId], references: [id])
  taskId          String        @map("task_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("assignment")
}

model SupportRequest {
  id                     String                 @id @default(uuid())
  user                   User                   @relation(fields: [userId], references: [id])
  userId                 String                 @map("user_id")
  topic                  String                 @db.VarChar(255)
  description            String                 @db.MediumText
  supportRequestsAnswers SupportRequestAnswer[]

  @@map("suport_request")
}

model SupportRequestAnswer {
  id               String         @id @default(uuid())
  feedback         String         @db.MediumText
  supportRequest   SupportRequest @relation(fields: [supportRequestId], references: [id])
  supportRequestId String         @map("support_request_id")

  @@map("support_request_answer")
}

model ConnectToProjectRequest {
  id        String  @id @default(uuid())
  user      User    @relation(fields: [userId], references: [id])
  userId    String  @map("user_id")
  project   Project @relation(fields: [projectId], references: [id])
  projectId String  @map("project_id")

  @@map("connect_to_project_request")
}

model Role {
  id                 String              @id @default(uuid())
  name               String              @db.VarChar(255)
  project            Project             @relation(fields: [projectId], references: [id])
  projectId          String              @map("project_id")
  projectMemberRoles ProjectMemberRole[]
  grants             Grant[]

  @@map("role")
}

model ProjectMemberRole {
  id              String        @id @default(uuid())
  role            Role          @relation(fields: [roleId], references: [id])
  roleId          String        @map("role_id")
  projectMember   ProjectMember @relation(fields: [projectMemberId], references: [id])
  projectMemberId String        @map("project_member_id")

  @@map("project_member_role")
}

model Grant {
  id         String @id @default(uuid())
  permission String @db.VarChar(255)
  role       Role   @relation(fields: [roleId], references: [id])
  roleId     String @map("role_id")

  @@map("grant")
}
```

### Головний файл програми
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap () {
  const port = process.env.PORT ?? 3000;

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      whitelist: true,
    }
  ));
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  const swaggerConfig = new DocumentBuilder()
    .setTitle('BranchOut API')
    .setDescription('API for project management')
    .setVersion('1')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(port, () => console.info(`Swagger: http://localhost:${port}/api`));
}

bootstrap();
```

### Головний модуль програми

```typescript
import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma.module';
import { UserModule } from './modules/user.module';
import { ProjectMemberModule } from './modules/project-member.module';

@Module({
  imports: [PrismaModule, UserModule, ProjectMemberModule],
})
export class AppModule {}
```

### Підключення до бази даних

#### Сервіс
```typescript
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit () {
    await this.$connect();
  }
}
```

#### Модуль
```typescript
import { Global, Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
```

### User

#### Контролер

```typescript
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserByIdPipe } from '../pipes/user-by-id.pipe';
import { UserService } from '../services/user.service';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { UserResponse } from '../responses/user.response';

@ApiTags('User')
@Controller('/users')
export class UserController {
  constructor (private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Get all users',
    description: 'Endpoint for getting all users',
  })
  @ApiOkResponse({
    type: [UserResponse],
  })
  @Get()
  getAll () {
    return this.userService.getAll();
  }

  @ApiOperation({
    summary: 'Get user by id',
    description: 'Endpoint for getting users by id',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to get',
  })
  @Get('/:id')
  get (@Param('id', UserByIdPipe) id: string) {
    return this.userService.getById(id);
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Endpoint for creating users',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      Username cannot be empty
      Username must be a string
      Username is too short (min: 2)
      Username is too long (max: 40)
      Email cannot be empty
      Email must be an email
      Password cannot be empty
      Password must be a string
      Password is too short (min: 8)
      First name cannot be empty
      First name must be a string
      First name is too short (min: 2)
      Last name cannot be empty
      Last name must be a string
      Last name is too short (min: 2)
      Last name is too long (max: 40)
      Avatar must be a URL`,
  })
  @Post()
  create (@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @ApiOperation({
    summary: 'Update user by id',
    description: 'Endpoint for updating users by id',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found

    InvalidBodyException:
      Username must be a string
      Username is too short (min: 2)
      Username is too long (max: 40)
      Email must be an email
      Password must be a string
      Password is too short (min: 8)
      First name must be a string
      First name is too short (min: 2)
      Last name must be a string
      Last name is too short (min: 2)
      Last name is too long (max: 40)
      Avatar must be a URL`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to update',
  })
  @Patch('/:id')
  update (
    @Param('id', UserByIdPipe) id: string,
    @Body() body: UpdateUserDTO,
  ) {
    return this.userService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Create user',
    description: 'Endpoint for creating users',
  })
  @ApiOkResponse({
    type: UserResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the user to delete',
  })
  @Delete('/:id')
  delete (@Param('id', UserByIdPipe) id: string) {
    return this.userService.deleteById(id);
  }
}

```

#### Сервіс

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import * as bcrypt from 'bcrypt';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { CreateUserDTO } from '../dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor (private readonly prisma: PrismaService) {}

  getAll () {
    return this.prisma.user.findMany();
  }

  getById (userId: string) {
    return this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async create ({ password, ...data }: CreateUserDTO) {
    const hashedPassword = await this.hashPassword(password);

    return this.prisma.user.create({
      data: {
        password: hashedPassword,
        ...data,
      },
    });
  }

  async updateById (userId: string, { password, ...data }: UpdateUserDTO) {
    const hashedPassword = await this.hashPassword(password);

    return this.prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
        password: password? hashedPassword : null,
      },
    });
  }

  deleteById (userId: string) {
    return this.prisma.user.delete({
      where: { id: userId },
    });
  }

  private async hashPassword (password: string): Promise<string> {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }
}
```

#### Пайп для валідації id

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';
import { UserService } from '../services/user.service';

@Injectable()
export class UserByIdPipe implements PipeTransform {
  constructor (private readonly userService: UserService) {}

  async transform (id: string): Promise<any> {
    const user = await this.userService.getById(id);
    if (!user) {
      throw new InvalidEntityIdException('User');
    }

    return user.id;
  }
}
```

#### DTO для створення

```typescript
import { IsEmail, IsNotEmpty, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { validationOptionsMsg } from '../utils';

export class CreateUserDTO {
    @ApiProperty({
        description: 'Username of the user',
    })
    @IsNotEmpty(validationOptionsMsg('Username cannot be empty'))
    @IsString(validationOptionsMsg('Username must be a string'))
    @MinLength(2, validationOptionsMsg('Username is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('Username is too long (max: 40)'))
    username: string;

    @ApiProperty({
        description: 'Email of the user',
    })
    @IsNotEmpty(validationOptionsMsg('Email cannot be empty'))
    @IsEmail({}, validationOptionsMsg('Email must be an email'))
    email: string;

    @ApiProperty({
        description: 'Password of the user',
    })
    @IsNotEmpty(validationOptionsMsg('Password cannot be empty'))
    @IsString(validationOptionsMsg('Password must be a string'))
    @MinLength(8, validationOptionsMsg('Password is too short (min: 8)'))
    password: string;

    @ApiProperty({
        description: 'First name of the user',
    })
    @IsNotEmpty(validationOptionsMsg('First name cannot be empty'))
    @IsString(validationOptionsMsg('First name must be a string'))
    @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('First name is too long (max: 40)'))
    firstName: string;

    @ApiProperty({
        description: 'Last name of the user',
    })
    @IsNotEmpty(validationOptionsMsg('Last name cannot be empty'))
    @IsString(validationOptionsMsg('Last name must be a string'))
    @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('Last name is too long (max: 40)'))
    lastName: string;

    @ApiPropertyOptional({
        description: 'Avatar link of the user',
    })
    @IsUrl({}, validationOptionsMsg('Avatar must be a URL'))
    avatar?: string;
}
```

#### DTO для оновлення

```typescript
import { IsEmail, IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { validationOptionsMsg } from '../utils';

export class UpdateUserDTO {
    @ApiPropertyOptional({
        description: 'Username of the user',
    })
    @IsOptional()
    @IsString(validationOptionsMsg('Username must be a string'))
    @MinLength(2, validationOptionsMsg('Username is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('Username is too long (max: 40)'))
    username?: string;

    @ApiPropertyOptional({
        description: 'Email of the user',
    })
    @IsOptional()
    @IsEmail({}, validationOptionsMsg('Email must be an email'))
    email?: string;

    @ApiPropertyOptional({
        description: 'Password of the user',
    })
    @IsOptional()
    @IsString(validationOptionsMsg('Password must be a string'))
    @MinLength(8, validationOptionsMsg('Password is too short (min: 8)'))
    password?: string;

    @ApiPropertyOptional({
        description: 'First name of the user',
    })
    @IsOptional()
    @IsString(validationOptionsMsg('First name must be a string'))
    @MinLength(2, validationOptionsMsg('First name is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('First name is too long (max: 40)'))
    firstName?: string;

    @ApiPropertyOptional({
        description: 'Last name of the user',
    })
    @IsOptional()
    @IsString(validationOptionsMsg('Last name must be a string'))
    @MinLength(2, validationOptionsMsg('Last name is too short (min: 2)'))
    @MaxLength(40, validationOptionsMsg('Last name is too long (max: 40)'))
    lastName?: string;

    @ApiPropertyOptional({
        description: 'Avatar link of the user',
    })
    @IsOptional()
    @IsUrl({}, validationOptionsMsg('Avatar must be a URL'))
    avatar?: string;
}
```

#### Модуль

```typescript
import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { UserByIdPipe } from '../pipes/user-by-id.pipe';

@Module({
  controllers: [UserController],
  providers: [UserService, UserByIdPipe],
})
export class UserModule {
}
```

### ProjectMember

#### Контролер

```typescript
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectMemberService } from '../services/project-member.service';
import { ProjectMemberResponse } from '../responses/project-member.response';
import { ProjectMemberByIdPipe } from '../pipes/project-member-by-id.pipe';
import { UpdateProjectMemberDto } from '../dtos/update-project-member.dto';
import { CreateProjectMemberDto } from '../dtos/create-project-member.dto';
import { ProjectMemberBodyPipe } from '../pipes/project-member-body.pipe';

@ApiTags('Project Member')
@Controller('/projectMembers')
export class ProjectMemberController {
  constructor (private readonly projectMemberService: ProjectMemberService) {}

  @ApiOperation({
    summary: 'Get all project members',
    description: 'Endpoint for getting all project members',
  })
  @ApiOkResponse({
    type: [ProjectMemberResponse],
  })
  @Get()
  getAll () {
    return this.projectMemberService.getAll();
  }

  @ApiOperation({
    summary: 'Get project member by id',
    description: 'Endpoint for getting project members by id',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Project member with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to get',
  })
  @Get('/:id')
  get (@Param('id', ProjectMemberByIdPipe) id: string) {
    return this.projectMemberService.getById(id);
  }

  @ApiOperation({
    summary: 'Create project member',
    description: 'Endpoint for creating project members',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      User with such id not found
      Project with such id not found
    
    InvalidBodyException:
      Project id cannot be empty
      Project id must be a UUID
      User id cannot be empty
      User id must be a UUID

    UserAlreadyInProjectException:
      User is already member of this project`,
  })
  @Post()
  create (@Body(ProjectMemberBodyPipe) body: CreateProjectMemberDto) {
    return this.projectMemberService.create(body);
  }

  @ApiOperation({
    summary: 'Update project member by id',
    description: 'Endpoint for updating project members by id',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Project member with such id not found
      User with such id not found
      Project with such id not found

    InvalidBodyException:
      Project id must be a UUID
      User id must be a UUID

    UserAlreadyInProjectException:
      User is already member of this project`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to update',
  })
  @Patch('/:id')
  update (
    @Param('id', ProjectMemberByIdPipe) id: string,
    @Body(ProjectMemberBodyPipe) body: UpdateProjectMemberDto,
  ) {
    return this.projectMemberService.updateById(id, body);
  }

  @ApiOperation({
    summary: 'Create project member',
    description: 'Endpoint for creating project members',
  })
  @ApiOkResponse({
    type: ProjectMemberResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidEntityIdException:
      Project member with such id not found`,
  })
  @ApiParam({
    name: 'id',
    description: 'Id of the project member to delete',
  })
  @Delete('/:id')
  delete (@Param('id', ProjectMemberByIdPipe) id: string) {
    return this.projectMemberService.deleteById(id);
  }
}
```

#### Сервіс

```typescript
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectMemberService {
  constructor (private readonly prisma: PrismaService) {}

  getAll () {
    return this.prisma.projectMember.findMany();
  }

  getById (projectMemberId: string) {
    return this.prisma.projectMember.findUnique({
      where: { id: projectMemberId },
    });
  }

  create (data: Prisma.ProjectMemberUncheckedCreateInput) {
    return this.prisma.projectMember.create({
      data,
    });
  }

  updateById (projectMemberId: string, data: Prisma.ProjectMemberUncheckedUpdateInput) {
    return this.prisma.projectMember.update({
      where: { id: projectMemberId },
      data,
    });
  }

  deleteById (projectMemberId: string) {
    return this.prisma.projectMember.delete({
      where: { id: projectMemberId },
    });
  }
}
```

#### Пайпи для валідації id

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';
import { ProjectMemberService } from '../services/project-member.service';

@Injectable()
export class ProjectMemberByIdPipe implements PipeTransform {
  constructor (private readonly projectMemberService: ProjectMemberService) {}

  async transform (id: string): Promise<any> {
    const projectMember = await this.projectMemberService.getById(id);
    if (!projectMember) {
      throw new InvalidEntityIdException('Project member');
    }

    return projectMember.id;
  }
}
```

```typescript
import { Injectable, PipeTransform } from '@nestjs/common';
import { InvalidEntityIdException } from '../exceptions/invalid-entity-id.exception';
import { PrismaService } from '../database/prisma.service';
import { UpdateProjectMemberDto } from '../dtos/update-project-member.dto';
import { UserAlreadyInProjectException } from '../exceptions/user-already-in-project.exception';

@Injectable()
export class ProjectMemberBodyPipe implements PipeTransform {
    constructor (private readonly prisma: PrismaService) {}

    async transform (body: UpdateProjectMemberDto): Promise<any> {
        if (body.userId) {
            const user = await this.prisma.user.findUnique({
                where: { id: body.userId },
            });

            if (!user) throw new InvalidEntityIdException('User');
        }

        if (body.projectId) {
            const project =  await this.prisma.project.findUnique({
                where: { id: body.projectId },
            });

            if (!project) throw new InvalidEntityIdException('Project');
        }

        if (body.userId && body.projectId) {
            const projectMember = await this.prisma.projectMember.findFirst({
                where: {
                    userId: body.userId,
                    projectId: body.projectId,
                },
            });

            if (projectMember) throw new UserAlreadyInProjectException();
        }

        return body;
    }
}
```

#### DTO для створення

```typescript
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../utils';

export class CreateProjectMemberDto {
  @ApiProperty({ description: 'Project id of the project member' })
  @IsNotEmpty(validationOptionsMsg('Project id cannot be empty'))
  @IsUUID(null, validationOptionsMsg('Project id must be a UUID'))
    projectId: string;

  @ApiProperty({ description: 'User id of the project member' })
  @IsNotEmpty(validationOptionsMsg('User id cannot be empty'))
  @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
    userId: string;
}
```

#### DTO для оновлення

```typescript
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsUUID } from 'class-validator';
import { validationOptionsMsg } from '../utils';

export class UpdateProjectMemberDto {
    @ApiPropertyOptional({ description: 'Project id of the project member' })
    @IsOptional()
    @IsUUID(null, validationOptionsMsg('Project id must be a UUID'))
    projectId?: string;

    @ApiPropertyOptional({ description: 'User id of the project member' })
    @IsOptional()
    @IsUUID(null, validationOptionsMsg('User id must be a UUID'))
    userId?: string;
}
```

#### Модуль

```typescript
import { Module } from '@nestjs/common';
import { ProjectMemberController } from '../controllers/project-member.controller';
import { ProjectMemberService } from '../services/project-member.service';
import { ProjectMemberByIdPipe } from '../pipes/project-member-by-id.pipe';
import { ProjectMemberBodyPipe } from '../pipes/project-member-body.pipe';

@Module({
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService, ProjectMemberByIdPipe, ProjectMemberBodyPipe],
})
export class ProjectMemberModule {}
```
