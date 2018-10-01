module.exports = {
  account: {
    create: {
      header: 'Create an account',
      company: {
        header: 'Data of your company',
        form: {
          name: 'Company',
          country: 'Country',
          currency: 'Currency',
          timeZone: 'Time zone',
          locale: 'Language'
        }
      },
      user: {
        header: `Owner's basic information`,
        form: {
          name: 'Name and surname',
          email: 'Email',
          password: 'Password'
        }
      },
      terms: {
        label: 'I agree to the Terms and Conditions'
      },
      success: {
        title: 'Confirm your email.',
        help: 'Write to info@control.fitness to request help if necessary.',
        messageOne: 'We have sent a confirmation link to the email you provided.',
        messageTwo: 'It may take a few seconds before you receive the confirmation message in your inbox.'
      }
    },
    user: {
      activate: {
        title: 'Activating your account.',
        message: 'We are activating your account. Wait a moment please.'
      },
      activated: {
        title: 'Account activated.',
        message: 'Your account has been activated successfully.'
      },
      login: {
        company: {
          title: 'Find your company to log in.',
          subTitle: 'Search using the name of your company.',
          form: {
            name: 'Company',
          }
        },
        user: {
          title: `Connect to you're account`,
          form: {
            email: 'Email',
            password: 'Password',
          }
        }
      },
      logout: {
        title: 'Sign out',
        message: 'Do you want to close your session and exit the system?'
      },
      profile: {
        title: 'profile',
        name: 'Name',
        email: 'Email',
        address: 'Addres',
        phone: 'Phone',
        password: 'Password',
        confirmYourCurrentPassword: 'Confirm your current password.',
        enterTheNewPassword: 'Enter the new password.',
        currentPassword: 'Current password',
        newPassword: 'New password',
        confirmNewPassword: 'Confirm new password',
        role: 'Role'
      }
    }
  },
  copyright: '© 2018 Control Fitness',
  form: {
    buttons: {
      back: 'Back',
      cancel: 'Cancel',
      change: 'Change',
      changePassword: 'Change password',
      continue: 'Continue',
      createAnAccount: 'Create an account',
      enter: 'Enter',
      getOut: 'Get out',
      goToStart: 'Go to start',
      next: 'Next',
      save: 'Save',
      search: 'Search'
    }
  },
  home: {
    section: {
      title: 'Business management software.',
      message: `If it's a yoga studio, gym, spa or salon, get everything you need to manage and grow your business.`
    },
    features: {
      title: 'Features',
      customers: {
        title: 'Customers',
        description: 'Manage the profiles of your clients.'
      },
      billing: {
        title: 'Billing',
        description: 'You can keep track of the payments made by your customers, apply discounts.'
      },
      disciplines: {
        title: 'Disciplines',
        description: 'Disciplines that you have available in your physical training center.'
      },
      schedule: {
        title: 'Schedule',
        description: 'The schedules allow your customers to know the availability of classes.'
      }
    }
  },
  masterData: {
    countries: {
      list: {
        gtm: 'Guatemala',
        slv: 'El Salvador',
        hnd: 'Honduras',
        nic: 'Nicaragua',
        cri: 'Costa Rica',
        pan: 'Panama',
        usa: 'United States'
      }
    },
    currencies: {
      list: {
        gtq: 'Guatemalan quetzal - GTQ',
        svc: 'Salvadoran Columbus - SVC',
        hnl: 'Honduran lempira - HNL',
        nio: 'Nicaraguan cordoba - NIO',
        crc: 'Costa Rican colon - CRC',
        pab: 'Panamanian balboa - PAB',
        usd: 'United States dollar - USD'
      }
    }
  },
  modules: {
    home: 'Home',
    reports: 'Reports',
    crm: 'CRM',
    financial: 'Financial',
    classes: 'Classes',
    settings: 'Settings',
    company: 'Company',
    account: 'Account'
  },
  notFound: {
    message: 'You seem to be trying to load a page that does not exist.',
    title: 'The page does not exist'
  },
  policies: {
    privacy: {
      title: 'Privacy Policy'
    },
    terms: {
      title: 'Terms of Service'
    }
  },
  validates: {
    errors: {
      headers: {
        validationFailed: 'Validation failed'
      },
      messages: {
        accepted: 'Must be accepted.',
        blank: 'Can\'t be blank.',
        empty: 'Can\'t be empty',
        confirmation: 'Doesn\'t match.',
        equalTo: 'Must be equal to _count_.',
        greaterThan: 'Must be greater than _count_',
        greaterThanOrEqualTo: 'Must be greater than or equal to _count_',
        invalid: 'Is invalid.',
        lessThan: 'Must be less than _count_',
        lessThanOrEqualTo: 'Must be less than or equal to _count_',
        required: 'Must exist.',
      },
    },
  },
}
