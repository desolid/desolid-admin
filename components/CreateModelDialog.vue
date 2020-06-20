
<template>
    <vs-dialog v-model="open" :loading="loading" :not-close="loading" dark>
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
                    v-else-if="field.type == 'File'"
                    :type="field.input"
                    @change="onFileInputChange($event, field.name)"
                    :label="field.name"
                >
                    <template #icon>
                        <box-icon :name="field.icon" color="#606161"></box-icon>
                    </template>
                </vs-input>
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
            <vs-button block color="dark" @click="create">Create {{model.name}}</vs-button>
        </template>
    </vs-dialog>
</template>
<script lang="ts">
import { IModel, IField } from '../types';

const FIELD_TYPE_TO_INPUT_TYPE = {
    String: 'text',
    JSON: 'textarea',
    Int: 'number',
    Float: 'number',
    DateTime: 'date',
    EmailAddress: 'email',
    File: 'file',
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

export default {
    props: ['show', 'model'],
    data: () => ({
        record: {},
        loading: false,
        enumFieldName: '',
        enumField: '',
    }),
    computed: {
        open: {
            get() {
                return this.show;
            },
            set(value) {
                if (value) {
                    // TODO
                } else {
                    this.$emit('closed');
                }
            },
        },
        fields() {
            return (this.model.fields as IField[])
                .filter((field) => (!field.readonly && !field.relationType) || field.type == 'File')
                .map((field) => {
                    if (field.values) {
                        this.enumField = field.values[0];
                        this.enumFieldName = field.name;
                    }
                    return {
                        ...field,
                        input: FIELD_TYPE_TO_INPUT_TYPE[field.type] || 'pensil',
                        icon: FIELD_TYPE_TO_ICON[field.type] || 'pencil',
                    };
                });
        },
    },
    methods: {
        async create() {
            this.loading = true;
            try {
                const record = { ...this.record };
                if (this.enumField) {
                    record[this.enumFieldName] = this.enumField;
                }
                const result = await this.$store.dispatch('model/create', { model: this.model, record });
                this.$emit('created', result);
                this.open = false;
            } catch (error) {
                alert(error.message);
            }
            this.loading = false;
        },
        onFileInputChange(event: any, fieldName: string) {
            if (event.target.files?.length > 0) {
                this.record[fieldName] = event.target.files[0];
            }
        },
    },
};
</script>
        