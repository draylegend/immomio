import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';
import { TestResolver } from './test.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      debug: !environment.production,
      driver: ApolloDriver,
      playground: !environment.production,
      autoSchemaFile: './schema.gql',
    }),
  ],
  providers: [TestResolver],
})
export class AppModule {}
