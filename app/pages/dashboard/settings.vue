<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex">
        <!-- SIDEBAR -->
        <DashboardSidebar />

        <!-- Area konten -->
        <main class="flex-1 px-4 py-6 sm:px-6 lg:px-10">
            <div class="w-full space-y-8">
                <header class="flex items-center justify-between">
                    <div class="flex items-center gap-3">

                        <div>
                            <h1 class="text-3xl font-bold text-white">Pengaturan</h1>
                        </div>
                    </div>
                </header>

                <!-- profil + password -->
                <div class="grid gap-1 lg:grid-cols-[1fr,1fr] items-start">
                    <PasswordForm />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import DashboardSidebar from '~/components/layout/Sidebar.vue'
import PasswordForm from '~/components/layout/PasswordForm.vue'
</script>
