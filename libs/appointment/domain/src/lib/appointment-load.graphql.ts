import { gql } from 'apollo-angular';

export const APPOINTMENTS_LOAD = gql`
  query Appointments {
    appointments {
      id
      date
      showContactInformation
      maxInviteeCount
      property {
        user {
          profile {
            firstname
            title
          }
        }
      }
    }
  }
`;
