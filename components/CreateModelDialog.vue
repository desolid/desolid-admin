
<template>
    <vs-dialog v-model="open">
        <template #header>
            <h4 class="not-margin">
                Create a new
                <b>{{model.name}}</b>
            </h4>
        </template>

        <form class="desolid-form">
            <div v-for="field in fields" :key="field.name">
                <vs-select
                    v-if="field.values"
                    placeholder="Select"
                    v-model="enumField"
                    :label="field.name"
                >
                    <vs-option
                        v-for="value in field.values"
                        :key="value"
                        :label="value"
                        :value="value"
                    >{{value}}</vs-option>
                </vs-select>
                <div v-else-if="field.type == 'Boolean'" class="desolid-checkbox">
                    <label>{{field.name}}</label>
                    <vs-switch v-model="record[field.name]" :label="field.name" primary>
                        <template #off>
                            <box-icon name="x" color="#606161"></box-icon>
                        </template>
                        <template #on>
                            <box-icon name="check" color="#ddd"></box-icon>
                        </template>
                    </vs-switch>
                </div>
                <vs-input
                    v-else
                    :type="field.input"
                    v-model="record[field.name]"
                    :label="field.name"
                >
                    <template #icon>
                        <box-icon :name="field.icon" color="#606161"></box-icon>
                    </template>
                </vs-input>
            </div>
        </form>
        <template>
            <br />
            <vs-button block color="dark" :loading="loading">Create {{model.name}}</vs-button>
        </template>
    </vs-dialog>
</template>
<script lang="ts">
import Vue from 'vue';
import { IModel, IField } from '../types';

const FIELD_TYPE_TO_INPUT_TYPE = {
    String: 'text',
    JSON: 'textarea',
    Int: 'number',
    Float: 'number',
    DateTime: 'date',
    EmailAddress: 'email',
    Password: 'password',
};

const FIELD_TYPE_TO_ICON = {
    String: 'pencil',
    JSON: 'code-curly',
    Int: 'number',
    Float: 'number',
    DateTime: 'calender',
    EmailAddress: 'mail-send',
    Password: 'key',
};

export default Vue.extend({
    props: {
        show: Boolean,
        model: Object,
    },
    data: () => ({
        record: {},
        loading: false,
        enumField: '',
    }),
    computed: {
        open: {
            get() {
                return this.show;
            },
            set(value) {
                if (value) {
                } else {
                    this.$emit('closed');
                }
            },
        },
        fields() {
            return (this.model.fields as IField[])
                .filter((field) => !field.readonly)
                .map((field) => {
                    return {
                        ...field,
                        input: FIELD_TYPE_TO_INPUT_TYPE[field.type] || 'pensil',
                        icon: FIELD_TYPE_TO_ICON[field.type] || 'pencil',
                    };
                });
        },
    },
});
</script>
        