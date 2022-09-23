import { AppointmentApiModule } from '@immomio/appointment/api';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { environment } from '../environments/environment';

@Module({
  imports: [
    AppointmentApiModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      debug: !environment.production,
      driver: ApolloDriver,
      playground: !environment.production,
      autoSchemaFile: './schema.graphql',
    }),
  ],
})
export class AppModule {}
