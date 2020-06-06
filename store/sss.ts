import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import * as store from 'store2';
import { plural } from 'pluralize';
import gql from 'graphql-tag';
import backend from '@/utils/backend';
import { IModel } from '~/types';

export const actions = {
    async nuxtServerInit(a, b, c) {
        debugger;
    },
};
